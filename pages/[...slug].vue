<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogImage: "https://i.imgur.com/XCaMSYr.png",
  ogUrl: "https://gregandcin.com",
  twitterTitle: page.value?.title,
  twitterDescription: page.value?.description,
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
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <div class="navbar bg-base-100 shadow-sm">
      <NuxtLink to="/" class="btn btn-ghost text-xl">gregandcin</NuxtLink>
    </div>

    <div class="container mx-auto py-10 px-4 md:px-6">
      <article class="mx-auto bg-base-100 p-6 md:p-10 rounded-xl shadow-lg">
        <div class="container mx-auto py-10 px-4 md:px-6">
          <ContentRenderer
            v-if="page"
            class="prose prose-lg max-w-none"
            :value="page"
          />
        </div>
      </article>
    </div>
  </div>
</template>
