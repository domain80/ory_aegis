<script lang="ts" setup>
import { type FlowError, FrontendApi } from '@ory/client';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const error = ref<FlowError>()

const route = useRoute()

const ory = new FrontendApi(undefined, "http://127.0.0.1:4433")

onMounted(async () => {
  const d = await ory.getFlowError({ id: route.query.id?.toString() ?? "" })
  error.value = d.data
})


</script>

<template>
  <div>
    <pre>{{ error }}</pre>
  </div>
</template>



<style></style>