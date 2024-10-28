// let appEnv = process.env.NODE_ENV || 'development';
// import { MasterKeys } from './config.js'

export default {
   // Add target for static deployment
  target: 'static',  // Add this line

  // Your existing config...
  head: {
    title: "gClub",
    // ... rest of your head config
  },

  // Add ssr configuration
  ssr: false,  // Add this if it's a SPA

  // Add generate configuration
  generate: {
    fallback: true
  },

  // Your other existing config...
  css: ["~/assets/global"],
  plugins: [
    {
      src: 'node_modules/vue-responsive-video-background-player/dist/index.common.js',
      ssr: false,
      mode: 'client'  // Change 'server' to 'client'
    },
  ],
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  dev: process.env.NODE_ENV !== 'production',
  // env: {
  //   apiEndPoint: MasterKeys[appEnv].apiEndPoint,
  //   clientId: MasterKeys[appEnv].clientId
  // },
  axios: {
    baseURL: process.env.VUE_APP_MY_BASE_URL,
  },
  head: {
    title: "gClub",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/gc-monogram-new.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/global"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: 'node_modules/vue-responsive-video-background-player/dist/index.common.js',
      ssr: false,
      mode: 'server'
    },
  ],

  i18n: {
    seo: false,
    locales: [
      {
        code: "en",
        name: "English"
      },
      {
        code: "cn",
        name: "Chinese"
      }
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Hello"
        },
        cn: {
          welcome: "Bonjour"
        }
      }
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'info@gclubs.com',
      },
      smtp: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'd890ffc3a7fc42',
          pass: '416d8da622e0ab'
        },
      },
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // loading: '~/components/app-loader.vue',
};
