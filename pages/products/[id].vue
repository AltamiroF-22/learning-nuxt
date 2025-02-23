<template>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price.toFixed(2) }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const url = `https://fakestoreapi.com/products/${id}`

    //fetch the product
    const {data:product} = await useFetch(url)

    definePageMeta({
    layout:'products'
    })
    
</script>

<style scoped>

</style>