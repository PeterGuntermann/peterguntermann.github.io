<script setup lang="ts">
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <nav class="navbar">
    <div class="flex-none">
      <NuxtLink to="/" class="me-5">
        <FontAwesomeIcon :icon="faHome" />
      </NuxtLink>

      <NuxtLink to="/songs/a-cappella" class="me-5" active-class="text-primary">
        A cappella
      </NuxtLink>

      <NuxtLink to="/songs/coversongs" class="me-5" active-class="text-primary">
        Coversongs
      </NuxtLink>
    </div>

    <div class="flex-1"></div>

    <slot></slot>
  </nav>
</template>

<style scoped></style>
