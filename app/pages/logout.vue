<script lang="ts" setup>
import { navigateTo } from '#imports';
import { FrontendApi } from '@ory/client';
import { onMounted } from 'vue';

const ory = new FrontendApi(undefined, "http://127.0.0.1:4433")
onMounted(() => {
  ory.createBrowserLogoutFlow({}, { withCredentials: true }).then((data) => {
    ory.updateLogoutFlow({ token: data.data.logout_token }, { withCredentials: true }).then((data) => {
      navigateTo({ name: "index" })
    })
  })
})

</script>
<template>
  <div>

  </div>
</template>



<style></style>