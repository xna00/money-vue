<template>
  <label>
    <span>{{ label }}</span>
    <input
      ref="input"
      v-model="value"
      type="text"
      :="$attrs"
    >
  </label>
</template>

<script lang="ts">
export default {
  name: "Input",
  props: {
    label: String,
    modelValue: String
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      }
    }
  }
};
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