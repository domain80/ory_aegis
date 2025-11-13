<script lang="ts" setup>
import { type Session } from '@ory/client'
import { isAxiosError } from 'axios'
import { onMounted, ref } from 'vue'
import { kratosClient } from '~/components/lib/kratos'
import { usePageTitle } from '~/composables/usePageTitle'

const session = ref<Session>()
const error = ref()

usePageTitle("Whoami")
onMounted(async () => {
  try {
    const { data } = await kratosClient.toSession({}, { withCredentials: true })
    session.value = data
  } catch (err) {
    error.value = isAxiosError(err) ? err.response?.data : err
  }
})

</script>

<template>
  <div class="">
    <h3 class="text-2xl">Who
      <span class="comic text-gray-500 mr-2 line-through ">am I</span>
      <span>are You </span>
    </h3>
    <section
      class="w-full overflow-scroll max-w-3xl max-h-140 shadow mt-8 rounded border border-gray-200 p-4 ">
      <pre v-if="error">{{ error }}</pre>
      <pre v-if="session" class="">{{ session }}</pre>
    </section>
  </div>
</template>
