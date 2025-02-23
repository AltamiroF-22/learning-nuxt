<template>
  <div class="container mx-auto px-4 my-8">
    <!-- Card principal -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <!-- Título do card -->
      <h2 class="text-2xl md:text-3xl font-bold text-[#12b488] mb-4">
        <span v-if="curr && curr.name">{{ curr.name }}</span>
        <span v-else>Loading...</span>
        ({{ curr ? curr.code : '' }})
      </h2>
      
      <!-- Grid para informações básicas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" v-if="curr">
        <div>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Symbol:</strong> {{ curr.symbol }}
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Native Symbol:</strong> {{ curr.symbol_native }}
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Decimal Digits:</strong> {{ curr.decimal_digits }}
          </p>
        </div>
        <div>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Rounding:</strong> {{ curr.rounding }}
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Name Plural:</strong> {{ curr.name_plural }}
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Type:</strong> {{ curr.type }}
          </p>
        </div>
      </div>

      <!-- Seção de países -->
      <div class="mt-4" v-if="curr">
        <p class="text-gray-700 dark:text-gray-300">
          <strong>Countries:</strong>
          <span v-if="curr.countries && curr.countries.length">
            {{ curr.countries.join(', ') }}
          </span>
          <span v-else>None</span>
        </p>
      </div>
    </div>
    <!-- Exibe o objeto completo para depuração -->
    <pre class="text-[#12b488] bg-gray-900 absolute bottom-0 w-full left-0 p-3">{{ curr }}</pre>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Define a moeda que será consultada
const currency = 'BTC'

// Realiza a chamada à API
const { data: fetchedData, error } = await useFetch(`/api/currency/${currency}`)

// Cria uma propriedade computada para extrair os dados da moeda usando a chave dinâmica
const curr = computed(() => fetchedData.value ? fetchedData.value[currency] : null)

    // const {data} = await useFetch('/api/ninja');

    // const {data} = await useFetch('/api/ninja?name=mario',{
    //     method: 'post',
    //     body:{
    //         age:30,
    //     }
    // });

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
