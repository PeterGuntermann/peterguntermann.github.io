<script setup lang="ts">
const route = useRoute();

console.log(route.params.id);
</script>

<template>
  <NuxtLink :to="`/coversongs`"> Zurück </NuxtLink>
  <pre>
ID: {{ route.params.id }}
  </pre>
</template>

<style scoped></style>
