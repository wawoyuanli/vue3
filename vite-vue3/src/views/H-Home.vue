<template>
  <div>
    <van-button type="primary" @click="nextPage">轮播</van-button>
    <componentTable ref="myRefs" :tableData="[1,2,3]"></componentTable>
  </div>
</template>
<script setup>
import { ref,provide } from "vue";
import { useRouter } from "vue-router";
import { getUserInfo } from "@/api/login.js";
import componentTable from '@/components/component-table.vue'
  // provide('message','messag')
const router = useRouter();
let a = {}
const myRefs = ref()
console.log('table',myRefs
);
async function nextPage() {
    a = await getUserInfo({ userId: "yangyang" });
}
  provide('message',a)
</script>
