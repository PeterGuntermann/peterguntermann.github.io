<script setup lang="ts">
type Coversong = {
  title: string;
  artist: string;
  id: string;
};

const songsCsv = await queryContent('/coversongs/coversongs').findOne();
const songs: Coversong[] = songsCsv.body as unknown as Coversong[];

const numSongs = songs.length;
const numSheets = songs.filter((song) => song.id).length;
const sheetsPercent = ((numSheets / numSongs) * 100).toFixed(2);
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
          <th>
            Sheets
            <span class="badge-sm badge-outline badge-primary">
              {{ numSheets }} of {{ numSongs }}
            </span>
            <span class="badge-sm badge-outline badge-secondary">
              {{ sheetsPercent }}%
            </span>
          </th>
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
