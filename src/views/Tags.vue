<template>
  <Layout>
    <div v-if="!tags.length">
      没有标签
    </div>
    <ol>
      <li
        v-for="tag in tags"
        :key="tag.id"
      >
        <router-link :to="`/tag/${tag.id}`">
          <span class="one-line">
            {{ tag.name }}
          </span>
          <Icon name="right" />
        </router-link>
      </li>
    </ol>
    <Center>
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Button @click="addTag">
        添加标签
      </Button>
    </Center>
  </Layout>
</template>
<script lang="ts" setup>
import {useTag} from "@/store/tagsStore";
import Icon from "@/components/Icon.vue";
import Center from "@/components/Center.vue";
import Button from "@/components/Button.vue";
import Space from "@/components/Space.vue";

const {tags, addTag} = useTag();

</script>
<style lang="scss" scoped>
ol {
  background: white;

  > li > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    padding: 12px 12px 15px 0;
    margin-left: 15px;
    border-bottom: 1px solid #bcbbc0;
  }
}
</style>