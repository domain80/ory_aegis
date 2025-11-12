<template>
    <div class="flex gap-6 py-4 items-center justify-start">
        <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
        <NuxtLink :to="{ name: 'login' }">Login</NuxtLink>
        <NuxtLink :to="{ name: 'register' }">Register</NuxtLink>
        <NuxtLink :to="{ name: 'whoami' }">Whoami</NuxtLink>
    </div>
</template>