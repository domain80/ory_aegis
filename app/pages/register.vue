<script lang="ts" setup>


definePageMeta({
  layout: false
})

const route = useRoute();


async function getFlow() {
  navigateTo("/api/register", { external: true })
}

// onMounted(async () => {
//   await getFlow()
// })

</script>

<template>
  <div class="w-full ">
    <nuxt-layout name="default">
      <template #header>
        <h3>Register</h3>
      </template>

      <button @click="getFlow">flow</button>

      <pre class="w-full">{{ route.query }}</pre>

    </nuxt-layout>
  </div>
</template>

<style></style>