<script setup lang="ts">
import QuickSearch from '~/components/quick-search.vue';

const coversongs = await useCoversongs();

const numSongs = coversongs.value.length;
const numSheetsReady = coversongs.value.filter((song) => song.status === 'ready').length;
const numSheetsDraft = coversongs.value.filter((song) => song.status === 'draft').length;
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
        <QuickSearch />
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

    <CoversongsGrid :coversongs="coversongs" />

    <CoversongsHtmlTable v-if="false" :coversongs="coversongs" />
  </div>
</template>

<style scoped></style>
