<script lang="ts" setup>
import { definePageMeta } from '#imports';
import { FrontendApi, type RegistrationFlow } from '@ory/client';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


definePageMeta({
  layout: false
})

const route = useRoute();
const ory = new FrontendApi(undefined, "http://127.0.0.1:4433")
const flow = ref<RegistrationFlow>()

onMounted(async () => {
  const { data } = await ory.getLoginFlow(
    { id: route.query.flow?.toString() ?? "" },
    { withCredentials: true }
  )
  flow.value = data
})
</script>

<template>
  <div class="w-full ">
    <nuxt-layout name="default">
      <template #header>
        <h3>Register</h3>
      </template>

      <div class="register-page">
        <h2>Login</h2>
        <FlowRenderer v-if="flow" :flow="flow" />
      </div>


      <pre v-if="flow">{{ flow }}</pre>

    </nuxt-layout>
  </div>>
</template>



<style></style>