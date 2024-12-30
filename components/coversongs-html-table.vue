<script setup lang="ts">
import { Song } from '~/types/songs';

const { songs } = defineProps<{
  songs: Song[];
}>();
</script>

<template>
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
            <NuxtLink v-if="song.id" :to="`/songs/coversongs/${song.id}`">
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
</template>
