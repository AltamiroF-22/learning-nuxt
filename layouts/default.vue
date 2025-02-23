<template>
    <header>
            <nav>
                <NuxtLink to="/">Nuxt Dojo</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output page content-->
         <div class="">
            <slot />
         </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>