<script setup lang="ts">
type Coversong = {
  title: string;
  artist: string;
  id: string;
};

const songsCsv = await queryContent('/coversongs/coversongs').findOne();
const songs: Coversong[] = songsCsv.body as unknown as Coversong[];
</script>

<template>
  <div class="container mx-auto px-4">
    <nav class="navbar">
      <h2>Coversongs</h2>
    </nav>

    <table class="table table-sm table-zebra w-full table-auto">
      <thead>
        <tr class="text-left">
          <th>Title</th>
          <th>Artist</th>
          <th></th>
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
            <NuxtLink
              v-if="song.id"
              class="btn btn-xs btn-outline"
              :to="`/coversongs/${song.id}`"
            >
              Show Sheet
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
