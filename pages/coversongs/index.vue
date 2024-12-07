<script setup lang="ts">
import DataTablesLib from 'datatables.net';

import DataTable from 'datatables.net-vue3';
import { Coversong } from '~/models/coversong';

DataTable.use(DataTablesLib);

// let stop1 = new Date();
// let xxx: Coversong[] = [
// ...(await getCoversongs()),
// ...(await getCoversongs()),
// ...(await getCoversongs()),
// ...(await getCoversongs()),
// ...(await getCoversongs()),
// ];
// let stop2 = new Date();
// console.log(`Fetch dauerte ${(stop2 - stop1) / 1000}s`);
// console.log(xxx);
// let stop3 = new Date();
// console.log(`Display dauerte ${(stop3 - stop2) / 1000}s`);

// const filter = async () => {
//   xxx = await getCoversongs({ title: { $contains: 'Nacht' } });
//   console.log('filter', xxx);
// };

const songs: Coversong[] = await getCoversongsByCsv();
const loadTestSongs: Coversong[] = await getCoversongs();
console.log('songs', loadTestSongs);

const numSongs = songs.length;
const numSheetsReady = songs.filter((song) => song.status === 'ready').length;
const numSheetsDraft = songs.filter((song) => song.status === 'draft').length;
const percent = (num: number) => ((num / numSongs) * 100).toFixed(0);

function renderCol(data: Coversong) {
  console.log(data);
  const targetRoute = `/coversongs/${data.id}`;
  const linkText =
    data.status === 'ready'
      ? `<span class="btn btn-xs btn-outline btn-success"> Sheet Ready </span>`
      : data.status === 'draft'
        ? `<span class="btn btn-xs btn-outline btn-warning"> Sheet Draft </span>`
        : `<span class="btn btn-xs btn-outline"> Sheet Todo </span>`;
  return `<a href="${targetRoute}"> ${linkText} </a>`;
}
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

    <DataTable
      :data="loadTestSongs"
      :columns="[
        { data: 'title', title: 'Title' },
        { data: 'artist', title: 'Artist' },
        {
          data: null,
          title: 'Sheet',
          orderable: false,
          render: renderCol,
        },
      ]"
      class="table table-sm table-zebra w-full table-auto"
    />

    <div class="divider">↑ DataTable /// plain HTML with for-each ↓</div>

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
