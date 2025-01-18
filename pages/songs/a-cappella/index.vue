<script setup lang="ts">
import ACappellaGrid from '~/components/a-cappella-grid.vue';
import ACappellaQuickSearch from '~/components/a-cappella-quick-search.vue';
import { useACappella } from '~/composables/use-a-cappella';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const { songs, numSongs } = await useACappella();
</script>

<template>
  <div class="container mx-auto px-4 pb-4">
    <nav class="navbar">
      <div class="flex-none">
        <NuxtLink to="/" class="me-5">
          <FontAwesomeIcon :icon="faHome" />
        </NuxtLink>
        <h2>A cappella</h2>
      </div>

      <div class="flex-1"></div>

      <div class="flex-none">
        <ACappellaQuickSearch />
      </div>

      <div class="flex-none">
        <span class="mx-1 badge badge-outline"> {{ numSongs }} songs </span>
      </div>
    </nav>

    <ACappellaGrid :songs="songs" />
  </div>
</template>

<style scoped></style>
