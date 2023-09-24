<template>
  <div>11</div>
</template>
<script setup>
import { inject, defineExpose, ref } from "vue";
const message = inject("message");
console.log("object :>> ", message);
const aa = ref("0");
let props = defineProps({
  tableData: {
   type:Array;
   default:()=>{
   return []
   }
  },
});
defineExpose({
  aa,
  message,
});
watch(() =>props.tableData,(value)=>{
debugger
});
</script>
