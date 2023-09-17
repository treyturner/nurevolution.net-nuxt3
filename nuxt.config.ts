// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/google-fonts'],
  devServer: {
    host: '0.0.0.0',
  },
  runtimeConfig: {
    public: {
      domainName: 'nurevolution.net',
    },
  },
  routeRules: {
    '/podcast.xml': {
      redirect: {
        to: '/feed/podcast',
        statusCode: 301,
      },
    },
  },
  nitro: {
    prerender: {
      routes: ['/feed/podcast'],
    },
  },
  typescript: {
    strict: true,
    shim: false,
  },
  googleFonts: {
    preload: true,
    subsets: 'greek',
    families: {
      Raleway: true,
      Roboto: true,
    },
  },
});
