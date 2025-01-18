<script setup lang="ts"></script>

<template>
  <SongsNavigation />

  <ContentDoc v-slot="{ doc }">
    <div class="collapse bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title">Debug</div>
      <div class="collapse-content">
        <pre>{{ JSON.stringify(doc, null, 2) }}</pre>
      </div>
    </div>

    <article class="container mx-auto px-4 prose">
      <h1>{{ doc.title }}</h1>
      <em>{{ doc.artist }}</em>
      <ContentRenderer :value="doc" />
    </article>
  </ContentDoc>
</template>
