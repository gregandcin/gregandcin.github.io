<script setup lang="ts">
import type { LargeImageProps } from "~/utils/largeImage";

const props = defineProps<LargeImageProps>();
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <NuxtImg
      :src="props.image"
      :alt="props.alt"
      class="max-h-128 object-contain rounded-sm"
    />
  </div>
</template>
