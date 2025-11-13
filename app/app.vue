<script setup lang="ts">
import { useHead } from '#imports';

useHead({ titleTemplate: "%s | Aegis" })
</script>

<template>
  <div>
    <NuxtLayout name="auth">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
