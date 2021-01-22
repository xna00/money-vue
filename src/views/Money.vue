<template>
  <!--  {{record}}-->
  <Layout class="money-layout">
    <TagsSection v-model="record.selectedTagsId" />
    <NoteSection v-model="record.note" />
    <CategorySection v-model="record.category" />
    <NumberPadSection v-model="record.amount" />
  </Layout>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import TagsSection from "@/views/Money/TagsSection.vue";
import NoteSection from "@/views/Money/NoteSection.vue";
import CategorySection from "@/views/Money/CategorySection.vue";
import NumberPadSection from "@/views/Money/NumberPadSection.vue";
import {RecordItem} from "@/store/recordsStore";
const record = ref<RecordItem>({
  selectedTagsId: [],
  note: "",
  category: "-",
  amount: "0",
  createAt: 0
});
</script>
<style lang="scss" scoped>
</style>