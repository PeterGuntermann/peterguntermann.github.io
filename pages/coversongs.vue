<script setup lang="ts">
type Coversong = {
  title: string;
  artist: string;
};

const songs: Coversong[] = [
  { title: 'Titel A', artist: 'Interpret A' },
  { title: 'Titel B', artist: 'Interpret B' },
  { title: 'Titel C', artist: 'Interpret C' },
];
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
