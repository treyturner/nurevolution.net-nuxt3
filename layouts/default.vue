<template>
  <div class="flex flex-col h-screen justify-between">
    <header class="shadow-sm bg-neutral-600">
      <nav class="container p-4 pl-8 flex justify-between">
        <NuxtLink to="/" class="font-bold">nurevolution studios</NuxtLink>
        <ul class="nav-items flex gap-4">
          <li><NuxtLink to="/">podcast</NuxtLink></li>
          <li><NuxtLink to="/about">about</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div class="container mb-auto p-4">
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

<style scoped></style>
