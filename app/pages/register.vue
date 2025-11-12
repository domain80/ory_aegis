<script lang="ts" setup>

definePageMeta({
  layout: false
})

const res = await useFetch("http://localhost:4433/self-service/registration/browser", {
  method: "POST",
});
</script>

<template>
  <div>
    <nuxt-layout name="default">
      <template #header>
        <h3 class="text-2xl">Register</h3>
      </template>
      {{ res }}
    </nuxt-layout>
  </div>
</template>

<style></style>