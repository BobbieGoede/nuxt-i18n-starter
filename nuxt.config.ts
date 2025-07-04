// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    // "@nuxtjs/i18n",
  ],
  vite: {
    optimizeDeps: {
      include: ["@intlify/shared", "@intlify/core-base"],
    },
  },

  // i18n: {
  //   locales: [{ code: "en", file: "en.json", comment: "This is from the project config" }],
  //   detectBrowserLanguage: false,
  // },

  compatibilityDate: "2024-11-15",
});
