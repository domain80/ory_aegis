<script lang="ts" setup>
import { useRoute } from '#imports';
import { computed, useAttrs } from 'vue';
import AppNav from '~/components/AppNav.vue';

const route = useRoute();
const attrs = useAttrs();

const pageTitle = computed(() => route.meta.title ?? attrs.title ?? "")

</script>

<template>
    <div
        class="dark:bg-gray-950 dark:text-gray-50 min-h-screen  overscroll-auto min-w-screen w-max p-12">
        <header class="text-2xl">
            <h3 :v-if="attrs.title">{{ pageTitle }}</h3>
        </header>
        <AppNav />

        <slot />
    </div>
</template>