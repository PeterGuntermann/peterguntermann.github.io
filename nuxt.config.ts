// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {},
  build: {
    transpile: [/ag-grid-vue3/],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    'nuxt-time',
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/scss/styles.scss'],
  content: {
    // https://content.nuxt.com/get-started/configuration#highlight
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai',
      },
    },
  },
});
