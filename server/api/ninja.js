export default defineEventHandler(async (event) => {
    // Lida com parâmetros de query
    // const { name } = getQuery(event)
  
    // Lida com os dados do body
    // const { age } = await readBody(event)
  
    // Acessa a variável de ambiente a partir do runtimeConfig
    const config = useRuntimeConfig()
  
    // Chamada à API usando a chave da variável de ambiente
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${config.CURRENCY_API_KEY}`)
  
    // return {
    //   message: `Hello, ${name}! You are ${age} years old.`,
    //   currencyData: data
    // }

    return data
  })
  