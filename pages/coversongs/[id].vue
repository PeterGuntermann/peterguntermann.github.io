<script setup lang="ts">
const route = useRoute();

console.log(route.params.id);
const sheet = await queryContent('/coversongs/' + route.params.id).findOne();
console.log(sheet);
</script>

<template>
  <NuxtLink :to="`/coversongs`"> Zurück </NuxtLink>
  <pre>
ID    : {{ route.params.id }}
Artist: {{ sheet.artist }}
Key   : {{ sheet.key }}
Body  : {{ JSON.stringify(sheet.body) }} # TODO: parse and display
  </pre>
</template>

<style scoped></style>
