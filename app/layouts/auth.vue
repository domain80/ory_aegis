<script lang="ts" setup>
import AppNav from '~/components/AppNav.vue';
</script>

<template>
  <div class="bg-neutral-100 p-2 min-h-screen flex ">
    <aside class="flex-1 w-full hidden lg:flex justify-center sticky top-0  items-center">
      <h1 class="text-5xl font-brand">Aegis</h1>
    </aside>
    <main
      class="p-4 bg-white shadow rounded-xl w-full flex-2 flex flex-col items-center justify-start border border-neutral-300 ">
      <div class="max-w-3xl w-full  ">
        <AppNav />
      </div>
      <div class="flex-1 flex items-center">
        <slot />
      </div>
    </main>
  </div>
</template>

<style></style>