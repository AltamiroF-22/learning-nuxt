<template>
    <div class="my-5">
        <div class="grid grid-cols-4 gap-5">
            <div class="" v-for="product in products">
               <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'products'
})

useHead({
    title:'Nuxt Dojo | Merch',
    meta:[
        {name:'description', content:"Nuxt 3 Merch"}
    ]
})

//fetch products
const {data: products} =await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>