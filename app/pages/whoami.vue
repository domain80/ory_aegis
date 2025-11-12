<script lang="ts" setup>
import { definePageMeta } from '#imports'
import { FrontendApi, type Session } from '@ory/client'
import { isAxiosError } from 'axios'
import { onMounted, ref } from 'vue'


definePageMeta({
  layout: false
})

const ory = new FrontendApi(undefined, "http://127.0.0.1:4433")
const session = ref<Session>()
const error = ref()

onMounted(async () => {
  try {
    const { data } = await ory.toSession({}, { withCredentials: true })
    session.value = data
  } catch (err) {
    error.value = isAxiosError(err) ? err.response?.data : err
  }
})

</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #header>
        <h3 class="text-2xl">Who
          <span class="comic text-gray-500 mr-2 line-through ">am I</span>
          <span>are You </span>
        </h3>
      </template>
      <pre v-if="error">{{ error }}</pre>
      <pre v-if="session">{{ session }}</pre>
    </NuxtLayout>
  </div>
</template>
