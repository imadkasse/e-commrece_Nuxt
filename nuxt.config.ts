// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  alias: {
    "@components": "./components",
  },
  app: {
    pageTransition: true,
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_BACK_URL,
    },
  },

  // modules

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
  },
  i18n: {
    locales: [
      {
        code: "ar",
        name: "عربي",
        files: ["ar.json"],
        dir: "rtl",
      },
      {
        code: "en",
        name: "English",
        files: ["en.json"],
        dir: "ltr",
      },
    ],
    lazy: true,
    defaultLocale: "ar",
  },
});
