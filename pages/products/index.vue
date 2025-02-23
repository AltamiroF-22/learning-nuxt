<template>
    <div class="my-5">
      <!-- Define um container centralizado com espaçamento lateral -->
      <div class="container mx-auto px-4">
        <!-- Layout responsivo usando grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div v-for="product in products">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'products'
  })
  
  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch' }
    ]
  })
  
  // Fetch products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  </script>
  
  <style scoped>
  </style>
  