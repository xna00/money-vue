<template>
  <ul>
    <li
      v-for="(v,k) in categoryMap"
      :key="k"
      :class="k===modelValue?'selected':''"
      @click="changeCategory(k)"
    >
      {{ v }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {defineEmit, defineProps} from "vue";

const props = defineProps({
  modelValue: {
    type: String
  }
});
const emit = defineEmit();
const changeCategory = (key) => {
  const newValue = key === "+" ? "+" : "-";
  emit("update:modelValue", newValue);
};
const categoryMap = {
  "-": "支出",
  "+": "收入"
};


</script>

<style lang="scss" scoped>
ul {
  font-size: 24px;
  display: flex;

  > li {
    width: 50%;
    text-align: center;
    padding: 16px 0;
    position: relative;
    cursor: pointer;

    &.selected::after {
      content: '';
      display: block;
      height: 3px;
      background: #333;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
  }
}

</style>