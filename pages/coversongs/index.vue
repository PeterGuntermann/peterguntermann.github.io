<script setup lang="ts">
import { getCoversongs } from '~/composables/coversongs';
import { Coversong } from '~/models/coversong';

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

    <CoversongsHtmlTable :coversongs="songs" />
  </div>
</template>

<style scoped></style>
