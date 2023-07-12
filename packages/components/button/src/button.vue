<template>
  <button
    class="yum-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <i v-if="props.loading" class="yum-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="props.icon"></i>
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "YumButton",
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
      [`yum-button--${type}`]: type,
      [`yum-button--${size}`]: size,
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

<style lang="scss" scoped>
i {
  margin-right: 5px;
}
</style>
