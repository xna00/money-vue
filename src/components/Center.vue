<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Center"
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>