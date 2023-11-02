// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 8000,
  },
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: 'http://localhost:9000/**',
      }
    }
  }
})
