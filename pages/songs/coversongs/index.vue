<script setup lang="ts">
import { useCoversongs } from '~/composables/use-coversongs';
import CoversongsQuickSearch from '~/components/songs/coversongs-quick-search.vue';
import CoversongsGrid from '~/components/songs/coversongs-grid.vue';
import CoversongsHtmlTable from '~/components/songs/coversongs-html-table.vue';

const { songs, numSongs, numSheetsReady, numSheetsDraft } = await useCoversongs();

const percent = (num: number) => ((num / numSongs) * 100).toFixed(0);
</script>

<template>
  <div class="container mx-auto px-4 pb-4">
    <SongsNavigation>
      <CoversongsQuickSearch />
      <span class="mx-1 badge badge-outline"> {{ numSongs }} songs </span>
      <span class="mx-1 badge badge-outline badge-warning">
        {{ numSheetsDraft }} draft ({{ percent(numSheetsDraft) }}%)
      </span>
      <span class="mx-1 badge badge-outline badge-success">
        {{ numSheetsReady }} ready ({{ percent(numSheetsReady) }}%)
      </span>
    </SongsNavigation>

    <CoversongsGrid :songs="songs" />

    <CoversongsHtmlTable v-if="false" :songs="songs" />
  </div>
</template>

<style scoped></style>
