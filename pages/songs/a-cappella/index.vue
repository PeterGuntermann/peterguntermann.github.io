<script setup lang="ts">
import ACappellaGrid from '~/components/songs/a-cappella-grid.vue';
import ACappellaQuickSearch from '~/components/songs/a-cappella-quick-search.vue';
import { useACappella } from '~/composables/use-a-cappella';

const { songs, numSongs } = await useACappella();
</script>

<template>
  <div class="container mx-auto px-4 pb-4">
    <SongsNavigation>
      <ACappellaQuickSearch />
      <span class="mx-1 badge badge-outline"> {{ numSongs }} songs </span>
    </SongsNavigation>

    <ACappellaGrid :songs="songs" />
  </div>
</template>

<style scoped></style>
