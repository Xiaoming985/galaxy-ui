<template>
  <i :class="`tas-icon-${name}`"></i>
</template>

<script lang="ts">
export default {
  name: "GaIcon",
};
</script>

<script setup lang="ts">
import "../style/";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>
