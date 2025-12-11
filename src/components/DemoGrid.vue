<template>
  <div class="w-full h-full">
    <RealGridVue ref="gridRef"></RealGridVue>
  </div>
</template>

<script setup lang="ts">
import { RealGridVue } from "realgrid-vue";
import { ref, onMounted } from "vue";

const gridRef = ref<RealGridVue>();

onMounted(() => {
  console.log(gridRef.value);
});
</script>