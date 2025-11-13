<script lang="ts" setup>
import { navigateTo, setPageLayout } from '#imports';
import { type RegistrationFlow } from '@ory/client';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { kratosClient } from '~/components/lib/kratos';
import { usePageTitle } from '~/composables/usePageTitle';

usePageTitle("Login")
setPageLayout("auth")
const flow = ref<RegistrationFlow>()
const route = useRoute();

onMounted(async () => {
  if (route.query.flow) {
    const { data } = await kratosClient.getLoginFlow(
      { id: route.query.flow?.toString() ?? "" },
      { withCredentials: true }
    )
    flow.value = data
  } else {
    navigateTo({ path: "http://127.0.0.1:4433/self-service/login/browser" }, { external: true })
  }

})
</script>

<template>
  <div class="w-full ">
    <header class="max-w-sm">
      <h4 class="text-2xl font-semibold">Sign in <span class="lg:hidden ">with
          Aegis</span></h4>
      <p class="text-neutral-600 mb-4 mt-1 line-clamp-2 overflow-clip ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, eveniet. Repellat
      </p>
    </header>
    <FlowRenderer v-if="flow" :flow="flow" />
    <!-- <pre v-if="flow">{{ flow }}</pre> -->
  </div>
</template>



<style></style>