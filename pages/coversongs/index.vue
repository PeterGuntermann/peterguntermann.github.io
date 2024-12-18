<script setup lang="ts">
import { getCoversongs } from '~/composables/coversongs';
import { Coversong } from '~/models/coversong';
import { AgGridVue } from 'ag-grid-vue3';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data: The data to be displayed.
const rowData = ref([
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
]);

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
  { field: 'electric' },
]);

let stop1 = new Date();
let xxx = [
  ...(await getCoversongs()),
  ...(await getCoversongs()),
  ...(await getCoversongs()),
  ...(await getCoversongs()),
  ...(await getCoversongs()),
];
let stop2 = new Date();
console.log(`Fetch dauerte ${(stop2 - stop1) / 1000}s`);
console.log(xxx);
let stop3 = new Date();
console.log(`Display dauerte ${(stop3 - stop2) / 1000}s`);

// const filter = async () => {
//   xxx = await getCoversongs({ title: { $contains: 'Nacht' } });
//   console.log('filter', xxx);
// };

const songs: Coversong[] = await getCoversongsByCsv();
// const songs: Coversong[] = await getCoversongs();

const numSongs = songs.length;
const numSheetsReady = songs.filter((song) => song.status === 'ready').length;
const numSheetsDraft = songs.filter((song) => song.status === 'draft').length;
const percent = (num: number) => ((num / numSongs) * 100).toFixed(0);
</script>

<template>
  <div class="container mx-auto px-4 pb-4">
    <nav class="navbar">
      <div class="flex-none">
        <h2>Coversongs</h2>
      </div>

      <div class="flex-1">
        <!-- Debug -->
        <!--        <button class="btn" @click="filter()">Filter</button>-->
      </div>

      <div class="flex-none">
        <span class="mx-1 badge badge-outline"> {{ numSongs }} songs </span>
        <span class="mx-1 badge badge-outline badge-warning">
          {{ numSheetsDraft }} draft ({{ percent(numSheetsDraft) }}%)
        </span>
        <span class="mx-1 badge badge-outline badge-success">
          {{ numSheetsReady }} ready ({{ percent(numSheetsReady) }}%)
        </span>
      </div>
    </nav>

    <AgGridVue :rowData="rowData" :columnDefs="colDefs" style="height: 500px"></AgGridVue>

    <div class="overflow-y-auto">
      <table class="table table-sm table-zebra w-full table-auto">
        <thead>
          <tr class="text-left">
            <th>Title</th>
            <th>Artist</th>
            <th>Sheet</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song of songs">
            <td>
              {{ song.title }}
            </td>
            <td>
              {{ song.artist }}
            </td>
            <td>
              <NuxtLink v-if="song.id" :to="`/coversongs/${song.id}`">
                <span
                  v-if="song.status === 'ready'"
                  class="btn btn-xs btn-outline btn-success"
                >
                  Sheet Ready
                </span>
                <span
                  v-else-if="song.status === 'draft'"
                  class="btn btn-xs btn-outline btn-warning"
                >
                  Sheet Draft
                </span>
                <span v-else class="btn btn-xs btn-outline"> Sheet Todo </span>
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
