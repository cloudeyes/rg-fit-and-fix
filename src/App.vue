<script setup lang="ts">
import DemoGrid from './components/DemoGrid.vue'
import RealGrid from "realgrid";

RealGrid.setLicenseKey(import.meta.env.VITE_REALGRID_LICENSE_KEY);
</script>

<template>
  <main class="flex flex-col gap-2 items-center justify-center p-2 h-screen w-screen">
    <h1 class="text-lg font-bold">RealGrid Demo: Fit Layout with Fixed Width Column</h1>
    <DemoGrid  />
  </main>
</template>

<style scoped>
</style>
