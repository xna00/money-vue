<template>
  <section>
    <ul>
      <li class="selected">
        支出
      </li>
      <li>收入</li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
section{
  font-size: 24px;
  > ul{
    display:flex;
    > li {
      width: 50%;
      text-align:center;
      padding: 16px 0;
      position:relative;
      cursor: pointer;
      &.selected::after{
        content: '';
        display:block;
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
}
</style>