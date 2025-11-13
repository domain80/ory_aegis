<script lang="ts" setup>
import { useHead } from '#imports';
import { type FlowError } from '@ory/client';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { kratosClient } from '~/components/lib/kratos';

useHead({ title: "Error", })

const error = ref<FlowError>()
const route = useRoute()


onMounted(async () => {
  const d = await kratosClient.getFlowError({ id: route.query.id?.toString() ?? "" })
  error.value = d.data
})


</script>

<template>
  <div>
    <pre>{{ error }}</pre>
  </div>
</template>



<style></style>