<script setup lang="ts"></script>

<template>
  <SongsNavigation />

  <ContentDoc v-slot="{ doc }">
    <div v-if="false" class="collapse bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title">Debug</div>
      <div class="collapse-content">
        <pre>{{ JSON.stringify(doc, null, 2) }}</pre>
      </div>
    </div>

    <article class="container mx-auto px-4">
      <h1>{{ doc.title }}</h1>
      <em>{{ doc.artist }}</em>
      <div class="content">
        <div class="prose">
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </article>
  </ContentDoc>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.content {
  column-count: auto;
  column-width: 24rem;
}
</style>
