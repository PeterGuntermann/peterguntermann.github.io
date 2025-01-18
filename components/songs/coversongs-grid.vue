<script setup lang="ts">
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  themeQuartz,
} from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3';
import { useCoversongsSearchterm } from '~/composables/use-coversongs';
import { Coversong } from '~/types/songs';
import CoversongsSheetLinkCellRenderer from '~/components/songs/coversongs-sheet-link-cell-renderer.vue';

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
    cellRenderer: 'CoversongsSheetLinkCellRenderer',
    cellRendererParams: { foo: 'bar' },
  },
]);

const { songs } = defineProps<{
  songs: Coversong[];
}>();

const { searchterm } = useCoversongsSearchterm();

watch(searchterm, (value) => {
  gridApi.value?.setGridOption('quickFilterText', value);
});

defineExpose({
  CoversongsSheetLinkCellRenderer,
});
</script>

<template>
  <div class="hidden">
    <!--  Ensure details content is not tree-shaked  -->
    <NuxtLink v-for="song of songs" :to="`/songs/coversongs/${song.id}`"></NuxtLink>
  </div>

  <AgGridVue
    style="height: calc(100vh - 5rem)"
    :rowData="songs"
    :columnDefs="colDefs"
    :theme="theme"
    :pagination="true"
    @grid-ready="onGridReady"
  />
</template>
