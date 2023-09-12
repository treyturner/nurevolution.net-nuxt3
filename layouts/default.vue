<template>
  <div class="flex flex-col h-screen">
    <header class="shadow-xl bg-neutral-600">
      <nav class="container py-2 px-3 flex justify-between">
        <NuxtLink to="/" class="font-bold text-neutral-300"
          >nurevolution studios</NuxtLink
        >
        <ul class="nav-items flex gap-4">
          <li><NuxtLink to="/">podcasts</NuxtLink></li>
          <li><NuxtLink to="/about">about</NuxtLink></li>
          <li><NuxtLink to="/podcast.xml">rss</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div class="container mb-auto px-3 py-2">
      <slot></slot>
    </div>

    <footer>
      <div class="grid grid-cols-1 place-items-center">
        <p class="text-xs">
          © {{ new Date().getFullYear() }} nurevolution studios
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-items > li > a {
  @apply text-neutral-400;
}
.nav-items > li > a.router-link-active {
  @apply text-orange-400;
}
</style>
