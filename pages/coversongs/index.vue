<script setup lang="ts">
type Coversong = {
  title: string;
  artist: string;
  id: string;
  status: 'todo' | 'draft' | 'ready';
};

const songsCsv = await queryContent('/coversongs/coversongs').findOne();
const songs: Coversong[] = songsCsv.body as unknown as Coversong[];

const numSongs = songs.length;
const numSheetsReady = songs.filter((song) => song.status === 'ready').length;
const numSheetsDraft = songs.filter((song) => song.status === 'draft').length;
const percent = (num: number) => ((num / numSongs) * 100).toFixed(2);
</script>

<template>
  <div class="container mx-auto px-4 pb-4">
    <nav class="navbar">
      <div class="flex-1">
        <h2>Coversongs</h2>
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
