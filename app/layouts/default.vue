<template>
    <div
        class="dark:bg-gray-950 dark:text-gray-50 min-h-screen  overscroll-auto min-w-screen w-max p-12">
        <header class="text-2xl">
            <slot name="header" />
        </header>
        <AppNav />

        <slot />
    </div>
</template>