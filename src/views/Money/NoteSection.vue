<template>
  <section>
    <label>
      <span>备注</span>
      <input
        type="text"
        placeholder="在这里添加备注"
      >
    </label>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
    outline: none;
  }
}
</style>