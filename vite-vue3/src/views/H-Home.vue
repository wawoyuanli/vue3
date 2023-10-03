<template>
  <div>
    <van-button type="primary" @click="nextPage">轮播</van-button>
    <componentTable ref="myRefs" :tableData="tableData"></componentTable>
    <div>{{ store.count }}</div>
    <div>2*count:{{ store.doubleCount }}</div>
    <button @click="store.increment">add</button>
  </div>
</template>
<script setup>
import { ref, provide } from "vue";
import { useRouter } from "vue-router";
import { getUserInfo } from "@/api/login.js";
import componentTable from "@/components/component-table.vue";
import { useCounterStore } from "@/stores/index.js";
const router = useRouter();
const store = useCounterStore();
console.log(router.push({ path: "" }));
let a = {};
const myRefs = ref();
let tableData = ref();
console.log("table", myRefs);
async function nextPage() {
  a = await getUserInfo({ userId: "yangyang" });
  tableData.value = [1, 2, 3];
}
provide("message", a);
</script>
