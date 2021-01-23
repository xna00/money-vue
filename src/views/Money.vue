<template>
  <!--    {{record}}-->
  <Layout class="money-layout">
    <TagsSection v-model="record.selectedTagsId" />
    <NoteSection v-model="record.note" />
    <CategorySection v-model="record.category" />
    <NumberPadSection
      v-model="record.amount"
      @ok="onOk"
    />
  </Layout>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import TagsSection from "@/views/Money/TagsSection.vue";
import NoteSection from "@/views/Money/NoteSection.vue";
import CategorySection from "@/views/Money/CategorySection.vue";
import NumberPadSection from "@/views/Money/NumberPadSection.vue";
import {RecordItem} from "@/store/recordsStore";
import showToast from "@/lib/showToast";
import {useRecords} from "@/store/recordsStore";

const defaultRecord = () => ({
  selectedTagsId: [],
  note: "",
  category: "-",
  amount: "0",
  createAt: 0
});
const record = ref<RecordItem>(JSON.parse(JSON.stringify(defaultRecord())));
const {addRecord} = useRecords();
const onOk = () => {
  if (record.value.selectedTagsId.length === 0) {
    showToast({
      content: "请选择标签",
      showTime: 2000
    });
    return;
  }
  record.value.createAt = Date.now();
  addRecord(record.value);
  record.value = defaultRecord();
};
</script>