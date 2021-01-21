<template>
  <div class="layout-wrapper">
    <main>
      <slot />
    </main>
    <Nav />
  </div>
</template>

<script lang="ts" setup>
import Nav from "./Nav.vue";
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>