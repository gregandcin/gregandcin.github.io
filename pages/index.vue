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
  featuredVideo: "https://youtu.be/gq5Lcbxi9ek?si=06VEYuHQLSjJ0vjR",
  videoCaption: "Check out my latest video!",
  links: [
    {
      id: 1,
      title: "BEYBLADE MIDWEST 2025!",
      url: "midwest2025",
      icon: "game-icons:spinning-top",
      style: "btn-info btn-xl",
    },
    {
      id: 2,
      title: "Next Beyblade Event!",
      url: "https://worldbeyblade.org/Thread-HOMETOWN-HEROES-BEYBLADE-X-VOL-14--117114",
      icon: "game-icons:spinning-top",
      style: "btn-accent",
    },
    {
      id: 3,
      title: "YouTube",
      url: "https://youtube.com/gregnadcin",
      icon: "i-simple-icons:youtube",
      style: "btn-secondary",
    },
    {
      id: 4,
      title: "Mastodon",
      url: "https://mindly.social/gregandcin",
      icon: "i-simple-icons:mastodon",
      style: "btn-primary",
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

// Function to extract YouTube video ID from different URL formats
function getYoutubeVideoId(url: string) {
  if (!url) return "";

  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : "";
}
</script>

<!-- pages/index.vue -->
<template>
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

    <!-- YouTube Video Section -->
    <div
      v-if="profile.featuredVideo"
      class="w-full rounded-lg overflow-hidden shadow-md"
    >
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          :src="`https://www.youtube.com/embed/${getYoutubeVideoId(profile.featuredVideo)}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full rounded-lg"
        />
      </div>
      <p
        v-if="profile.videoCaption"
        class="text-sm text-center mt-2 text-base-content/70"
      >
        {{ profile.videoCaption }}
      </p>
    </div>

    <!-- Links Section -->
    <div class="space-y-3">
      <NuxtLink
        v-for="link in profile.links"
        :key="link.id"
        :href="link.url"
        rel="noopener noreferrer"
        class="btn btn-block"
        :class="link.style"
      >
        <Icon v-if="link.icon" :name="`${link.icon}`" />
        {{ link.title }}
      </NuxtLink>
    </div>

    <!-- Social Icons -->
    <div class="flex justify-center space-x-4 mt-6">
      <NuxtLink
        v-for="social in profile.socials"
        :key="social.id"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-circle btn-outline"
      >
        <Icon :name="`${social.icon}`" />
      </NuxtLink>
    </div>
  </div>
</template>

<style>
/* Additional styles for responsive video embedding */
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}

.aspect-w-16 iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
