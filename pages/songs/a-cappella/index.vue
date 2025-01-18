<script setup lang="ts">
import ACappellaGrid from '~/components/songs/a-cappella-grid.vue';
import ACappellaQuickSearch from '~/components/songs/a-cappella-quick-search.vue';
import { useACappella } from '~/composables/use-a-cappella';

const { songs } = await useACappella();
</script>

<template>
  <div class="container mx-auto px-4 pb-4">
    <SongsNavigation>
      <ACappellaQuickSearch />
    </SongsNavigation>

    <ACappellaGrid :songs="songs" />
  </div>
</template>

<style scoped></style>
