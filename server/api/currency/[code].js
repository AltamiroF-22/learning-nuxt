export default defineEventHandler(async(event) => {
    const {code} = event.context.params

    const config = useRuntimeConfig()

    const uri = 
    `https://api.currencyapi.com/v3/currencies?apikey=${config.CURRENCY_API_KEY}&currencies=${code}`

    // const uri = 
    // `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${config.CURRENCY_API_KEY}`

    const {data} = await $fetch(uri)

    return data
})