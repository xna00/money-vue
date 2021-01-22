<template>
  <Layout class="money-layout">
    <TagsSection />
    <NoteSection />
    <CategorySection />
    <NumberPadSection />
  </Layout>
</template>
<script lang="ts" setup>
import TagsSection from "@/views/Money/TagsSection.vue";
import NoteSection from "@/views/Money/NoteSection.vue";
import CategorySection from "@/views/Money/CategorySection.vue";
import NumberPadSection from "@/views/Money/NumberPadSection.vue";
</script>
<style lang="scss" scoped>
</style>