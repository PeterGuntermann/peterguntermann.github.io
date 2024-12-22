<script setup lang="ts">
import { Coversong } from '~/models/coversong';

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

      <div class="flex-1"></div>

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
