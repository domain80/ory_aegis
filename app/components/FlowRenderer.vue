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
  const url = new URL(props.flow.ui.action)
  url.searchParams.set('flow', props.flow.id)
  return url.toString()
})

</script>

<template>
  <div class="min-w-sm ory-flow">


    <!-- Main form -->
    <form class="ory-form grid gap-2" method="POST" :action="actionUrl">
      <component v-for="(vnode, i) in mainVNodes" :key="i" :is="vnode" />
    </form>

    <p class=" w-full flex gap-4 justify-center items-center my-2 before:flex-1 after:flex-1 
      before:border-neutral-200 after:border-neutral-200 before:border after:border ">
      or
    </p>

    <!-- OIDC buttons outside form -->
    <form class="ory-group" method="POST" :action="actionUrl">
      <component v-for="(node) in oidcNodes" :key="node.meta.label"
        :is="parseNode(node)" />
    </form>
  </div>
</template>
