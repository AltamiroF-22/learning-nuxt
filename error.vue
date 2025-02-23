<template>
    <div class="w-full h-[100dvh] flex items-center justify-center">
        <div class="max-w-sm mx-auto text-center">
        <p class="mt-5 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-5 text-4xl"> Ooops</p>
        <p class="mt-5">{{ error.message }}</p>
        <button class="btn my-6" @click="handleClearError">Go Home...</button>
    </div>
    </div>
</template>

<script setup>

defineProps(['error'])

const handleClearError = () => clearError({redirect:'/'})
    
</script>

<style scoped>

</style>