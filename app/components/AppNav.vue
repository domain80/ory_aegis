<script setup>
const registrationUrl = new URL("http://127.0.0.1:4433/self-service/registration/browser");

const loginUrl = new URL("http://127.0.0.1:4433/self-service/login/browser");

const logoutUrl = new URL("http://127.0.0.1:4433/self-service/logout/browser");


</script>

<template>
    <div class="flex justify-between">
        <div class="flex gap-6 py-4 items-center justify-start">
            <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
            <NuxtLink :to="{ path: loginUrl.toString(), }" :external="true">Login
            </NuxtLink>
            <NuxtLink :to="{ path: registrationUrl.toString() }" :external="true">Register
            </NuxtLink>
            <NuxtLink :to="{ name: 'whoami' }">Whoami</NuxtLink>
        </div>
        <div class="flex gap-6 py-4 items-center justify-start">


            <NuxtLink :to="{ name: 'logout' }">
                Logout
            </NuxtLink>

        </div>
    </div>
</template>