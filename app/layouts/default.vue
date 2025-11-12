<template>
    <div class="dark:bg-gray-950 dark:text-gray-50 min-h-screen p-12">
        <header>
            <slot name="header" />
            <AppNav />
        </header>

        <slot />
    </div>
</template>