<script lang="ts" setup>
import {useRecords} from "@/store/recordsStore.ts";
import {useTag} from "@/store/tagsStore";
import {ref, reactive, onMounted, watchEffect} from "vue";
import dayjs from "dayjs";
import Category from "@/components/Category.vue";

const format = "YYYY-MM-DD";
const {records} = useRecords();
const {findTag} = useTag();
const category = ref("-");
const sortedGroupedRecords = ref([]);

onMounted(() => {
  watchEffect(() => {
    const groupedRecords = {};
    records.forEach(record => {
      if (record.category !== category.value) return;
      const day = dayjs(record.createAt).format(format);
      if (!(day in groupedRecords)) {
        groupedRecords[day] = [];
      }
      groupedRecords[day].push(record);
    });
    sortedGroupedRecords.value = Object.keys(groupedRecords).sort((a, b) => a > b ? -1 : 1).map(key => {
      return {
        date: key,
        total: groupedRecords[key].reduce((currentValue, record) => {
          return currentValue + parseFloat(record.amount);
        }, 0),
        records: groupedRecords[key]
      };
    });
  });
});
</script>
<template>
  <Layout>
    <div class="category">
      <Category v-model="category" />
    </div>
    <div v-if="!sortedGroupedRecords.length">
      没有记录
    </div>
    <ul
      v-else
      class="records"
    >
      <li
        v-for="dayRecords in sortedGroupedRecords"
        :key="dayRecords.date"
      >
        <header>
          <span>{{ dayRecords.date === dayjs().format(format) ? '今天' : 
            dayRecords.date === dayjs().subtract(1, 'd').format(format) ? '昨天' :
            dayRecords.date === dayjs().subtract(2, 'd').format(format) ? '前天' :
            dayRecords.date }}</span>
          <span>{{ dayRecords.total }}¥</span>
        </header>
        <ul class="day-records">
          <li
            v-for="record in dayRecords.records"
            :key="record.createAt"
          >
            <span>{{ record.selectedTagsId.map(id => findTag(id).name).join('、') }}</span>
            <span class="note">{{ record.note }}</span>
            <span>{{ record.amount }}¥</span>
          </li>
        </ul>
      </li>
    </ul>
  </Layout>
</template>
<style lang="scss">
.category {
  background: white;
}
.records {
  font-size: 18px;

  header {
    line-height: 20px;
    padding: 10px 16px;
    background: #f5f5f5;
    display: flex;
    justify-content: space-between;
  }

  .day-records {
    > li {
      line-height: 20px;
      padding: 10px 16px;
      background: white;
      display: flex;
      justify-content: space-between;

      > .note {
        margin-right: auto;
        margin-left: 14px;
        color: #999999;
      }
    }
  }
}
</style>
