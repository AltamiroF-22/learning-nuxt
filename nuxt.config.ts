export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    CURRENCY_API_KEY: process.env.CURRENCY_API_KEY,
    // public:{

    // }
  },

  app:{
    head:{
      title:'Nuxt Dojo',
      meta: [
        {name:'description', content:'Everything Nuxt 3'}
      ],
      link:[
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})
