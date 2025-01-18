<script setup lang="ts">
import { ICellRendererParams } from 'ag-grid-community';
import { ACappellaSong } from '~/types/songs';

const { params } = defineProps<{ params: ICellRendererParams }>();
const song: ACappellaSong = params.data;
</script>

<template>
  <NuxtLink v-if="song.id" :to="`/songs/a-cappella/${song.id}`">
    <span v-if="song.status === 'ready'" class="btn btn-xs btn-outline btn-primary">
      Sheet
    </span>

    <span v-else class="btn-xs"><em> No sheet </em></span>
  </NuxtLink>
</template>
