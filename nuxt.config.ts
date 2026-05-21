// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-11-19",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/scripts",
    "@nuxt/image",
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  css: ["~/assets/app.css"],
  icon: {
    // mode: "css",
    cssLayer: "base",
  },
  image: {
    domains: ["imgur.com"],
    format: ["webp"],
    presets: {
      avatar: {
        modifiers: {
          format: "webp",
          width: 96,
          height: 96,
        },
      },
    },
  },
});
