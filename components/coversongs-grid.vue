<script setup lang="ts">
import { Coversong } from '~/models/coversong';
import { AgGridVue } from 'ag-grid-vue3';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data: The data to be displayed.
const rowData = ref([
  { title: 'Tesla', artist: 'Model Y', sheet: 64950 },
  { title: 'Ford', artist: 'F-Series', sheet: 33850 },
  { title: 'Toyota', artist: 'Corolla', sheet: 29600 },
]);

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref<ColDef[]>([
  { field: 'title' },
  { field: 'artist' },
  { field: 'sheet', valueFormatter: (x) => `Value: ${x.value}` },
]);

const { coversongs } = defineProps<{
  coversongs: Coversong[];
}>();
</script>

<template>
  <AgGridVue :rowData="rowData" :columnDefs="colDefs" style="height: 500px" />

  <pre v-if="false">
Coversongs:
{{ JSON.stringify(coversongs, null, 2) }}
  </pre>
</template>
