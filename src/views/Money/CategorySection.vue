<template>
  <section>
    <ul>
      <li
        v-for="(v,k) in categoryMap"
        :key="k"
        :class="k===modelValue?'selected':''"
        @click="changeCategory"
      >
        {{ v }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import {defineEmit, defineProps} from "vue";

const props = defineProps({
  modelValue: {
    type: String
  }
});
const emit = defineEmit();
const changeCategory = () => {
  const newValue = props.modelValue === "-" ? "+" : "-";
  emit("update:modelValue", newValue);
};
const categoryMap = {
  "-": "支出",
  "+": "收入"
};

</script>

<style lang="scss" scoped>
section {
  font-size: 24px;

  > ul {
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
}
</style>