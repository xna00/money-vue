<template>
  <section>
    <Category :="$attrs" />
  </section>
</template>

<script lang="ts" setup>
import Category from "@/components/Category.vue";
</script>

<style lang="scss" scoped>
section {
  font-size: 24px;
  background: #c4c4c4;

}
</style>