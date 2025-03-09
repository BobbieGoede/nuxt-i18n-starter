// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/i18n"],

  i18n: {
    lazy: true,
    defaultLocale: "en",
    locales: [
      {
        name: "English",
        code: "en",
        language: "en-US",
        file: "en.json",
      },
      {
        name: "Nederlands",
        code: "nl",
        language: "nl-NL",
        file: "nl.json",
      },
      {
        name: "日本語",
        code: "ja",
        language: "ja-JA",
        file: "ja.json",
      },
    ],
    detectBrowserLanguage: false,
  },

  compatibilityDate: "2024-11-15",
});
