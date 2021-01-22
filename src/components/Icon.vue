<template>
  <svg class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script lang="ts" setup>
require("@/assets/icons/tag.svg");
require("@/assets/icons/money.svg");
require("@/assets/icons/chart.svg");
import {defineProps} from "vue";

defineProps({
  name: String
});
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>