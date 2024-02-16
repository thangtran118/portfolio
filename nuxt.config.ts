import { isDev } from './utils/std-env'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },
  components: [
    { path: '~/components/pages', prefix: 'P' },
    '~/components',
  ],
  image: {
    format: ['webp', 'png', 'jpg', 'jpeg'],
  },
  colorMode: {
    classSuffix: '',
  },
  sourcemap: isDev,
  experimental: {
    payloadExtraction: false,
  },
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
})
