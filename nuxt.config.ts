// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
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
