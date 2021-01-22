<template>
  <Layout>
    <div>1234</div>
  </Layout>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {useTag} from '@/store/tagsStore.ts'
import Layout from '@/components/Layout.vue'

const route = useRoute();
console.log(route.path);
</script>

<style lang="scss" scoped>

</style>