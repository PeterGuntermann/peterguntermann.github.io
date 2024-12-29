<script setup lang="ts">
import { Coversong } from '~/models/coversong';
import { AgGridVue } from 'ag-grid-vue3';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  themeQuartz,
} from 'ag-grid-community';
import { SheetLinkCellRenderer } from '#components';

const gridApi = shallowRef<GridApi | null>(null);
const onGridReady = (params: GridReadyEvent) => {
  gridApi.value = params.api;
};

const theme = themeQuartz.withParams({
  backgroundColor: 'transparent',
  browserColorScheme: 'dark',
  cellTextColor: 'oklch(var(--bc)/1)',
  chromeBackgroundColor: '#12121200',
  foregroundColor: 'oklch(var(--bc)/1)',
  headerFontSize: 14,
  oddRowBackgroundColor: 'oklch(var(--b2)/var(--tw-bg-opacity))',
});

ModuleRegistry.registerModules([AllCommunityModule]);

const colDef: ColDef = { resizable: false };
const colDefs = ref<ColDef[]>([
  { ...colDef, flex: 1, field: 'title' },
  { ...colDef, flex: 1, field: 'artist' },
  { ...colDef, field: 'year' },
  {
    ...colDef,
    field: 'sheet',
    cellRenderer: 'SheetLinkCellRenderer',
    cellRendererParams: { foo: 'bar' },
  },
]);

const { coversongs } = defineProps<{
  coversongs: Coversong[];
}>();

defineExpose({
  SheetLinkCellRenderer,
});
</script>

<template>
  <AgGridVue
    class="table"
    style="height: calc(100vh - 5rem)"
    :rowData="coversongs"
    :columnDefs="colDefs"
    :theme="theme"
    :pagination="true"
    @grid-ready="onGridReady"
  />
</template>
