<template>
    <transition name="yum-message-fade" @before-leave="beforeLeave" @after-leave="$emit('destroy')">
        <div
            v-show="visible"
            :id="id"
            class="yum-message"
            :style="styles"
            :class="defClass"
            @mouseenter="clearTimeFn"
            @mouseleave="startTimerFn"
        >
            <yum-icon :name="iconName" class="yum-message__icon" />
            <slot>
                <span class="yum-message__content">{{ message }}</span>
            </slot>
            <yum-icon name="close" class="yum-message__close-btn" v-if="closeable" @click="close" />
        </div>
    </transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { YumIcon } from '../../icon';
import { MessageProps } from './message';
const iconMaps: any = {
    info: 'details',
    success: 'check_circle',
    error: 'close_circle',
    warning: 'warn'
};
const emit = defineEmits(['destroy', 'close']);
let visible = ref(false);
const props = defineProps(MessageProps);
const close = () => (visible.value = false);
const beforeLeave = () => {
    emit('close');
};
const iconName = computed(() => {
    const { type } = props;
    return iconMaps[type];
});
let timer: null | NodeJS.Timeout = null;
const startTimerFn = () => {
    if (props.duration > 0) {
        timer = setTimeout(() => {
            visible.value = false;
        }, props.duration);
    }
};
const clearTimeFn = () => {
    clearTimeout(Number(timer));
};
onMounted(() => {
    visible.value = true;
    startTimerFn();
});
let styles = computed(() => ({
    top: `${props.offset}px`,
    zIndex: props.zIndex
}));
const defClass = computed(() => ['yum-message--' + props.type, props.center ? 'is-center' : '']);
onUnmounted(() => {
    clearTimeFn();
});
</script>

<style></style>
