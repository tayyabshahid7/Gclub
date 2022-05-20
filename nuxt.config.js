export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  dev: process.env.NODE_ENV !== 'production',
  axios: {
    baseURL: process.env.BASE_URL,
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
