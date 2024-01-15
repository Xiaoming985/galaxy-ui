<template>
  <i :class="`yum-icon-${name}`"></i>
</template>

<script lang="ts">
export default {
  name: "YumIcon",
};
</script>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
