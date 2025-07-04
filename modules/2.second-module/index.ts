import { createResolver, defineNuxtModule, installModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "second-module",
    configKey: "secondModule",
  },
  async setup(_, nuxt) {
    const resolver = createResolver(import.meta.url);
    await installModule(
      "@nuxtjs/i18n",
      {
        langDir: resolver.resolve("./locales"),
        locales: [{ code: "en", file: resolver.resolve("./locales/en.json") }],
      },
      nuxt,
      { defer: true }
    );
  },
});
