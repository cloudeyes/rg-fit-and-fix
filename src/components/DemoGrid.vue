<template>
  <div class="w-full h-full">
    <RealGridVue ref="gridRef"></RealGridVue>
  </div>
</template>

<script setup lang="ts">
import { RealGridVue } from "realgrid-vue";
import { ref, onMounted, nextTick } from "vue";
import { createLotListColumns, createLotListFields, createLotListRows } from "../lib/faker";
import { GridFitStyle, LocalDataProvider } from "realgrid";

const gridRef = ref<RealGridVue>();
let dataProvider: LocalDataProvider | null = null

onMounted(async () => {
  const gridView = gridRef.value?.gridView;
  dataProvider = new LocalDataProvider(false);
  dataProvider.setFields(createLotListFields());
  console.log(gridView);

  if (!gridView) return;

  gridView.setColumns(createLotListColumns())
  gridView.setDataSource(dataProvider);
  gridView.setDisplayOptions({
    fitStyle: GridFitStyle.FILL,
  })


  gridView.showLoading()

  await new Promise((resolve) => setTimeout(resolve, 300))
  dataProvider.setRows(createLotListRows())
  await nextTick()

  gridView.displayOptions.minCellWidth = 28;
  gridView.fitLayoutWidth('option', 28, 28)
  gridView.closeLoading()
});
</script>

<style>
@import "tailwindcss";

.rg-cell-buttons {
  @apply mr-1.5;
  & > .rg-button-action {
    z-index: 1;
    outline: 1px solid #dadfe4;
    outline-offset: -1px;
    border-radius: 2px;
    cursor: pointer;
    background-image: url("data:image/svg+xml,<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 7C3 6.44772 3.44772 6 4 6C4.55228 6 5 6.44772 5 7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7Z' fill='%2390969D'/><rect x='6' y='6' width='2' height='2' rx='1' fill='%2390969D'/><rect x='9' y='6' width='2' height='2' rx='1' fill='%2390969D'/></svg>");
    &:hover {
      background-color: #e5f0f9;
      background-image: url("data:image/svg+xml,<svg width='14' height='14' viewBox='0 0 14 14' fill='white' xmlns='http://www.w3.org/2000/svg'><path d='M3 7C3 6.44772 3.44772 6 4 6C4.55228 6 5 6.44772 5 7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7Z' fill='%230077C8'/><rect x='6' y='6' width='2' height='2' rx='1' fill='%230077C8'/><rect x='9' y='6' width='2' height='2' rx='1' fill='%230077C8'/></svg>");
    }
  }
}

.rg-cell-button-only {
  min-width: 28px;
  max-width: 28px;
  &:hover {
    background-color: white !important;
  }
  @apply min-w-7 w-7;
  & > .rg-renderer {
    display: none !important;
  }
  & > .rg-cell-buttons {
    @apply flex items-center justify-center w-full! px-1.5!;
    margin-top: -6px;
    position: inherit !important;
    .rg-button-action {
      height: 14px !important;
      width: 14px !important;
      min-width: 14px !important;
      position: inherit !important;
      display: block;
    }
  }
  .rg-header-renderer {
    text-align: center;
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>