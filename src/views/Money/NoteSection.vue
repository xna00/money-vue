<template>
  <section>
    <label>
      <span>备注</span>
      <input
        ref="input"
        type="text"
        placeholder="在这里添加备注"
        :value="modelValue"
        @change="$emit('update:modelValue',$refs.input.value)"
      >
    </label>
  </section>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps(["modelValue"]);
</script>

<style lang="scss" scoped>
section {
  padding: 16px;
  font-size: 14px;
}

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