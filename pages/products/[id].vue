<template>
    <div>
       <ProductDetail :product ></ProductDetail>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const url = `https://fakestoreapi.com/products/${id}`

    //fetch the product
    const {data:product} = await useFetch(url)

    if(!product.value){
        throw createError({
            statusCode:404,
            statusMessage:"Product not found",
            fatal: true
        })
    }

    definePageMeta({
    layout:'products'
    })
    
</script>

<style scoped>

</style>