<template>
  <Layout>
    <div class="topbar">
      <router-link to="/tags">
        <Icon name="left" />
      </router-link>
      编辑标签
      <Icon
        name="ok"
        @click="updateTag(id,tagName)"
      />
    </div>
    <div v-if="tag">
      <div class="input-wrapper">
        <Input
          v-model="tagName"
          placeholder="在这里添加备注"
          label="标签名"
        />
      </div>
      <Center>
        <Space />
        <Space />
        <Space />
        <Space />
        <Button @click="deleteTag(id);tag=undefined">
          删除标签
        </Button>
      </Center>
    </div>
    <div v-else>
      标签不存在！
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRoute} from "vue-router";
import {useTag} from "@/store/tagsStore.ts";
import Layout from "@/components/Layout.vue";
import Input from "@/components/Input.vue";
import Icon from "@/components/Icon.vue";
import Center from "@/components/Center.vue";
import Space from "@/components/Space.vue";
import Button from "@/components/Button.vue";

const route = useRoute();
const id = parseFloat(route.params.id);
const {findTag, updateTag, deleteTag} = useTag();
const tag = ref(findTag(id));
const tagName = ref(tag.value?.name);
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;

  svg {
    cursor: pointer;
  }
}

.input-wrapper {
  padding: 4px 0;
  margin-top: 16px;
  background: white;
}
</style>