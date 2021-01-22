<template>
  <section>
    <ul>
      <li
        v-for="tag in tags"
        :key="tag.id"
      >
        {{ tag.name }}
      </li>
    </ul>
    <button>添加标签</button>
  </section>
</template>

<script lang="ts" setup>
const tags = [{
  id: 1,
  name: "eat"
},
  {
    id: 2,
    name: "cloth"
  }];
</script>

<style lang="scss" scoped>
section {
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ul { margin: 0 -12px;
    > li{
      background: #D9D9D9; border-radius: 18px;
      display:inline-block; padding: 3px 18px;
      font-size: 14px; margin: 8px 12px;
      cursor: pointer;
      &.selected {
        background: red;
      }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
    outline: none;
    cursor: pointer;
  }

}
</style>