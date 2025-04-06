<script setup lang="ts">
useSeoMeta({
  title: "gregandin",
  description: "gregandcin's Homepage",
  ogTitle: "gregnadcin",
  ogDescription: "gregandcin's Homepage",
  ogImage: "https://i.imgur.com/XCaMSYr.png",
  ogUrl: "https://gregandcin.com",
  twitterTitle: "gregandcin",
  twitterDescription: "gregandcin's Homepage",
  twitterImage: "https://i.imgur.com/XCaMSYr.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

const profile = reactive({
  name: "gregandcin",
  bio: "Cheap Gamer, Bad Blader",
  links: [
    {
      id: 1,
      title: "Next Beyblade Event!",
      url: "https://worldbeyblade.org/Thread-HOMETOWN-HEROES-BEYBLADE-X-VOL-10--116516",
      icon: "game-icons:spinning-top",
      style: "btn-primary",
    },
    {
      id: 2,
      title: "YouTube",
      url: "https://youtube.com/gregnadcin",
      icon: "i-simple-icons:youtube",
      style: "btn-secondary",
    },
    {
      id: 3,
      title: "Mastodon",
      url: "https://mindly.social/gregandcin",
      icon: "i-simple-icons:mastodon",
      style: "btn-accent",
    },
  ],
  socials: [
    {
      id: 1,
      icon: "i-simple-icons:twitter",
      url: "https://twitter.com/gregandcin",
    },
    {
      id: 2,
      icon: "i-simple-icons:instagram",
      url: "https://instagram.com/gregandcin",
    },
    {
      id: 3,
      icon: "i-simple-icons:github",
      url: "https://github.com/gregandcin",
    },
  ],
});
</script>

<!-- pages/index.vue -->
<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4"
  >
    <div class="max-w-md w-full space-y-8 bg-base-100 p-6 rounded-xl shadow-xl">
      <!-- Profile Section -->
      <div class="flex flex-col items-center text-center">
        <div class="avatar">
          <div
            class="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          >
            <img src="https://i.imgur.com/XCaMSYr.png" alt="Profile Image" />
          </div>
        </div>
        <h1 class="mt-4 text-2xl font-bold">{{ profile.name }}</h1>
        <p class="text-base-content/70">{{ profile.bio }}</p>
      </div>

      <!-- Links Section -->
      <div class="space-y-3">
        <a
          v-for="link in profile.links"
          :key="link.id"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-block"
          :class="link.style"
        >
          <Icon v-if="link.icon" :name="`${link.icon}`" />
          {{ link.title }}
        </a>
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center space-x-4 mt-6">
        <a
          v-for="social in profile.socials"
          :key="social.id"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-circle btn-outline"
        >
          <Icon :name="`${social.icon}`" />
        </a>
      </div>
    </div>

    <div class="mt-6 text-center text-sm opacity-70">
      <p>© {{ new Date().getFullYear() }} | {{ profile.name }}</p>
    </div>
  </div>
</template>
