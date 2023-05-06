<template>
  <button
    class="yam-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <i v-if="props.loading" class="yam-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="props.icon"></i>
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "YamButton",
};
</script>

<script lang="ts" setup>
import "../style/";
import { computed } from "vue";
import { Props, Emits } from "./button";
const props = defineProps(Props);
const emits = defineEmits(Emits);
const classList = computed(() => {
  const { type, size, round, plain, circle, disabled, loading } = props;
  return [
    {
      [`yam-button--${type}`]: type,
      [`yam-button--${size}`]: size,
      ["is-disabled"]: disabled,
      ["is-loading"]: loading,
      ["is-round"]: round,
      ["is-plain"]: plain,
      ["is-circle"]: circle,
    },
  ];
});
function handlerClick(evt: MouseEvent): void {
  emits("click", evt);
}
</script>

<style lang="scss"></style>
