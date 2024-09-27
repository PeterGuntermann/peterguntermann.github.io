<script setup lang="ts">
type Coversong = {
  title: string;
  artist: string;
};

const songsCsv = await queryContent('/coversongs/coversongs').findOne();
const songs: Coversong[] = songsCsv.body as unknown as Coversong[];
</script>

<template>
  <div class="container mx-auto">
    <h2>Coversongs</h2>

    <table class="w-full table-auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song of songs">
          <td>
            {{ song.title }}
          </td>
          <td>
            {{ song.title }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
