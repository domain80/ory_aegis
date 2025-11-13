<script lang="ts" setup>
import { navigateTo, useHead } from '#imports';
import { onMounted } from 'vue';
import { kratosClient } from '~/components/lib/kratos';

useHead({ title: "Logout", })

onMounted(() => {
  kratosClient.createBrowserLogoutFlow({}, { withCredentials: true }).then((data) => {
    kratosClient.updateLogoutFlow({ token: data.data.logout_token }, { withCredentials: true }).then(() => {
      navigateTo({ name: "index", replace: true })
    })
  })
})

</script>
<template>
  <div>

  </div>
</template>



<style></style>