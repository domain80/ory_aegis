<script lang="ts" setup>
import { navigateTo, useHead } from '#imports';
import { isAxiosError } from 'axios';
import { onMounted, ref } from 'vue';
import { kratosClient } from '~/components/lib/kratos';

useHead({ title: "Logout", })
const error = ref()

onMounted(() => {
  kratosClient.createBrowserLogoutFlow({}, { withCredentials: true }).then((data) => {
    kratosClient.updateLogoutFlow({ token: data.data.logout_token }, { withCredentials: true }).then(() => {
      navigateTo({ name: "index", replace: true })
    }).catch((err) => {
      error.value = isAxiosError(err) ? err.response?.data : err
    })
  }).catch((err) => {
    error.value = isAxiosError(err) ? err.response?.data : err
  })
})

</script>
<template>

  <div>
    <h3 class="text-2xl">Logout</h3>
    <section
      class="w-full overflow-scroll max-w-3xl max-h-140 shadow mt-8 rounded border border-gray-200 p-4 ">
      <pre v-if="error">{{ error }}</pre>
    </section>
  </div>
</template>



<style></style>