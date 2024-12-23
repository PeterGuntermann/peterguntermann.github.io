<script setup lang="ts">
import { ICellRendererParams } from 'ag-grid-community';
import { Coversong } from '~/models/coversong';

const { params } = defineProps<{ params: ICellRendererParams }>();
const song: Coversong = params.data;
</script>

<template>
  <NuxtLink v-if="song.id" :to="`/coversongs/${song.id}`">
    <span v-if="song.status === 'ready'" class="btn btn-xs btn-outline btn-success">
      Sheet Ready
    </span>
    <span v-else-if="song.status === 'draft'" class="btn btn-xs btn-outline btn-warning">
      Sheet Draft
    </span>
    <span v-else class="btn btn-xs btn-outline"> Sheet Todo </span>
  </NuxtLink>
</template>
