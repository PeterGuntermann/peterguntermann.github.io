<script setup lang="ts">
import QuickSearch from '~/components/quick-search.vue';
import { useCoversongs } from '~/composables/songs';

const { coversongs, numSongs, numSheetsReady, numSheetsDraft } = await useCoversongs();

const percent = (num: number) => ((num / numSongs) * 100).toFixed(0);
</script>

<template>
  <div class="container mx-auto px-4 pb-4">
    <nav class="navbar">
      <div class="flex-none">
        <NuxtLink to="/" class="me-5"> ← Home </NuxtLink>
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

    <CoversongsGrid :songs="coversongs" />

    <CoversongsHtmlTable v-if="false" :songs="coversongs" />
  </div>
</template>

<style scoped></style>
