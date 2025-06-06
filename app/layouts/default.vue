<template>
  <div>
    <div
      class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4"
    >
      <slot />
    </div>

    <div class="mt-6 text-center text-sm opacity-70">
      <p>© {{ new Date().getFullYear() }} | gregandcin</p>
    </div>
  </div>
</template>
