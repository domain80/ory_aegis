<script setup lang="ts">
import type { RegistrationFlow } from '@ory/client';
import type { VNode } from 'vue';
import { computed } from 'vue';
import { parseNode } from './lib/kratos';

const props = defineProps<{
  flow: RegistrationFlow
}>()

const nodes = props.flow.ui.nodes

// Split nodes by group
const oidcNodes = computed(() => nodes.filter(n => n.group === 'oidc'))
const mainNodes = computed(() => nodes.filter(n => n.group !== 'oidc'))

// Pre-render VNodes to satisfy TS type inference
const oidcVNodes = computed<VNode[]>(() => oidcNodes.value.map(parseNode))
const mainVNodes = computed<VNode[]>(() => mainNodes.value.map(parseNode))

const actionUrl = computed(() => {
  // flow.ui.action + 'return_to=http://127.0.0.1:5173/api/authenticated'
  const url = new URL(props.flow.ui.action)
  url.searchParams.set('flow', props.flow.id)
  // url.searchParams.set('return_to', 'http://127.0.0.1:5173/api/authenticated')
  return url.toString()
})

</script>

<template>
  <div class="ory-flow">

    <!-- OIDC buttons outside form -->

    <form class="ory-group" method="POST" :action="actionUrl">
      <component v-for="(vnode, i) in oidcVNodes" :key="i" :is="vnode" />
    </form>

    <!-- Main form -->
    <form class="ory-form" method="POST" :action="actionUrl">
      <component v-for="(vnode, i) in mainVNodes" :key="i" :is="vnode" />
    </form>

  </div>
</template>

<style scoped>
.ory-flow {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.oidc-group {
  display: flex;
  gap: 0.5rem;
}

.ory-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
