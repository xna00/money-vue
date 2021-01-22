<template>
  <button><slot /></button>
</template>

<script lang="ts">
export default {
  name: "Button"
};
</script>

<style lang="scss" scoped>
button {
  font-size: 18px;
  line-height: 20px;
  padding: 10px 13px;
  background: #767676;
  border: none;
  border-radius: 4px;
  outline: none;
}
</style>