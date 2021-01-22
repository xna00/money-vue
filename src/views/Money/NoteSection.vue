<template>
  <section>
    <Input
      placeholder="在这里添加备注"
      label="备注"
      :="$attrs"
    />
  </section>
</template>

<script lang="ts" setup>
import Input from "@/components/Input.vue";
</script>

<style lang="scss" scoped>
section {
  padding: 16px;
  font-size: 14px;
}

</style>