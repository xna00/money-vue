<template>
  <section>
    <div className="output">
      {{ modelValue }}
    </div>
    <div
      className="pad"
      @Click="onClickButtonWrapper"
    >
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="ok">
        OK
      </button>
      <button className="zero">
        0
      </button>
      <button>.</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {defineProps, defineEmit} from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmit();
const onClickButtonWrapper = (e) => {
  let newOutput = props.modelValue;
  const text = (e.target as HTMLButtonElement).textContent;
  if (text === null) {
    return;
  }
  if (text.length === 1 && text >= "0" && text <= "9") {
    if (newOutput === "0")
      newOutput = text;
    else
      newOutput += text;
  } else if (text === "." && !newOutput.includes(".")) {
    newOutput += ".";
  } else if (text === "清空") {
    newOutput = "0";
  } else if (text === "删除") {
    newOutput = newOutput.slice(0, -1) || "0";
  } else if (text.includes("OK")) {
    emit("ok");
    return;
  } else {
    return;
  }
  if (newOutput.length >= 16)
    newOutput = newOutput.slice(0, 17);
  emit("update:modelValue", newOutput);
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      border-radius: 2px;
      outline: none;
      cursor: pointer;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #E0E0E0;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #D3D3D3;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #C1C1C1;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #B8B8B8;
      }

      &:nth-child(12) {
        background: #9A9A9A;
      }

      &:nth-child(14) {
        background: #A9A9A9;
      }
    }
  }
}
</style>