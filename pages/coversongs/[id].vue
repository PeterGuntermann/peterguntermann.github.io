<script setup lang="ts"></script>

<template>
  <NuxtLink class="btn btn-outline btn-info btn-sm" :to="`/coversongs`">
    ← Zurück
  </NuxtLink>

  <ContentDoc v-slot="{ doc }">
    <article class="container mx-auto px-4 prose">
      <h1>{{ doc.title }}</h1>
      <em>{{ doc.artist }}</em>
      <ContentRenderer :value="doc" />
    </article>
  </ContentDoc>
</template>
