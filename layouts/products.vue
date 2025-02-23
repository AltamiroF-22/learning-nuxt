<template>
    <header class="shadow-sm py-4 bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink class="font-bold text-md" to="/products">Nuxt Dojo Merch</NuxtLink>
               
            </nav>
        </header>

        <!-- output page content-->
         <div class="container mx-auto">
            <slot />
         </div>

         <footer class="container mx-auto p-6 flex justify-between border-t-2">
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">products</NuxtLink></li>
                </ul>
         </footer>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>