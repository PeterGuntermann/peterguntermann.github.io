<script setup lang="ts">
import { Coversong } from '~/models/coversong';
import { AgGridVue } from 'ag-grid-vue3';
import {
  AllCommunityModule,
  ColDef,
  ModuleRegistry,
  themeQuartz,
} from 'ag-grid-community';

// to use myTheme in an application, pass it to the theme grid option
const theme = themeQuartz.withParams({
  backgroundColor: 'transparent',
  browserColorScheme: 'dark',
  cellTextColor: 'oklch(var(--bc)/1)',
  chromeBackgroundColor: '#12121200',
  foregroundColor: 'oklch(var(--bc)/1)',
  headerFontSize: 14,
  oddRowBackgroundColor: 'oklch(var(--b2)/var(--tw-bg-opacity))',
});

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data: The data to be displayed.
const rowData = ref([
  { title: 'Tesla', artist: 'Model Y', sheet: 64950 },
  { title: 'Ford', artist: 'F-Series', sheet: 33850 },
  { title: 'Toyota', artist: 'Corolla', sheet: 29600 },
]);

// Column Definitions: Defines the columns to be displayed.
const colDef: ColDef = { flex: 1, resizable: false };
const colDefs = ref<ColDef[]>([
  { ...colDef, field: 'title' },
  { ...colDef, field: 'artist' },
  {
    ...colDef,
    field: 'sheet',
    valueFormatter: (x) => `Value: ${x.value}`,
  },
]);

const { coversongs } = defineProps<{
  coversongs: Coversong[];
}>();

const mapData = (coversongs: Coversong[]) =>
  coversongs.map((x) => ({
    title: x.title,
    artist: x.artist,
    sheet: x.status,
  }));
</script>

<template>
  <AgGridVue
    class="table"
    :rowData="mapData(coversongs)"
    :columnDefs="colDefs"
    :theme="theme"
    :pagination="true"
    style="width: 100%; height: 500px"
  />

  <pre v-if="false">
Coversongs:
{{ JSON.stringify(coversongs, null, 2) }}
  </pre>
</template>
