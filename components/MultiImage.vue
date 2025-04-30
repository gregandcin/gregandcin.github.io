<script setup lang="ts">
import type { MultiImageProps } from "~/utils/multiImage";

const props = defineProps<MultiImageProps>();
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <img
      v-for="image in props.images"
      :src="image.image"
      :alt="image.alt"
      class="max-h-64 max-w-64 object-contain rounded-sm"
    />
  </div>
</template>
