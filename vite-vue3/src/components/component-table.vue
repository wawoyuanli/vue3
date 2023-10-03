<template>
  <div>11</div>
</template>
<script setup>
import { inject, defineExpose, ref, watch } from "vue";
const message = inject("message");
console.log("", message);
const aa = ref("1");
const props = defineProps(["tableData"]);
defineExpose({
  aa,
  message,
});
watch(
  () => props.tableData,
  (value, prevValue) => {
    debugger;
  }
);
</script>
