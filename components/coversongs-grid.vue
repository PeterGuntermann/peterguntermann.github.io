<script setup lang="ts">
import { SheetLinkCellRenderer } from '#components';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  themeQuartz,
} from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3';
import { useCoversongsSearchterm } from '~/composables/coversongs';
import { Coversong } from '~/models/coversong';

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

const colDef: ColDef = { resizable: false, flex: 1 };
const colDefs = ref<ColDef[]>([
  { ...colDef, field: 'title', flex: 2 },
  { ...colDef, field: 'artist', flex: 2 },
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

const { searchterm } = useCoversongsSearchterm();

watch(searchterm, (value) => {
  gridApi.value?.setGridOption('quickFilterText', value);
});

defineExpose({
  SheetLinkCellRenderer,
});
</script>

<template>
  <AgGridVue
    style="height: calc(100vh - 5rem)"
    :rowData="coversongs"
    :columnDefs="colDefs"
    :theme="theme"
    :pagination="true"
    @grid-ready="onGridReady"
  />
</template>
