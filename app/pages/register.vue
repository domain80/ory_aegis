<script lang="ts" setup>
import { type RegistrationFlow } from '@ory/client';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import FlowRenderer from '~/components/FlowRenderer.vue';
import { kratosClient } from '~/components/lib/kratos';
import { usePageTitle } from '~/composables/usePageTitle';


const route = useRoute();
const flow = ref<RegistrationFlow>()

usePageTitle("Register")
onMounted(async () => {
  const { data } = await kratosClient.getRegistrationFlow(
    { id: route.query.flow?.toString() ?? "" },
    { withCredentials: true }
  )
  flow.value = data
})

</script>

<template>
  <div class=" ">

    <header class="max-w-sm">
      <h4 class="text-2xl font-semibold">Sign Up <span class="lg:hidden ">with
          Aegis</span></h4>
      <p class="text-neutral-600 mb-4 mt-1 line-clamp-2 overflow-clip ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, eveniet. Repellat
      </p>
    </header>
    <FlowRenderer v-if="flow" :flow="flow" />

  </div>

</template>

<style></style>