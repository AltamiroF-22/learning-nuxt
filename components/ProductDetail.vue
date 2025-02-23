<template>
    <div class="container mx-auto px-4">
      <!-- Grid de 1 coluna em telas pequenas e 2 colunas em md para cima -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-7">
          <img
            :src="product.image"
            alt="product image"
            class="mx-auto my-7 w-full object-cover"
          />
        </div>
        <div class="p-7">
          <h2 class="clamp-title my-7">{{ product.title }}</h2>
          <p class="clamp-price my-7">Price - ${{ product.price.toFixed(2) }}</p>
          <h3 class="font-bold border-b border-gray-300 mb-4 pb-2 text-lg">
            Product description:
          </h3>
          <p class="mb-7">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
  /* O clamp define um tamanho mínimo, um valor fluido baseado na viewport e um máximo */
  .clamp-title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }
  .clamp-price {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
  img{
    max-width: 400px;
  }
  </style>
  