<template>
  <div v-if="podcast">
    <div>
      <span class="pb-0 text-sm">another dope</span>
      <h1 class="pb-4 pt-0">podcast</h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div>
        <iframe
          height="480"
          width="480"
          :src="`//www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${podcast.mixcloudSlug}%2F`"
          frameborder="0"
          class="pb-4"
        ></iframe>

        <div>
          <p>{{ podcast.description }}</p>
        </div>
      </div>

      <div class="w-fit">
        <header>{{ podcast.title }}</header>

        <div class="container">
          <div>Mixed by {{ podcast.mixedBy }}</div>
          <div>Released {{ formatDate(podcast.releaseDate) }}</div>
        </div>

        <ol v-if="podcast.tracklist" class="pl-6">
          <li
            v-for="track in podcast.tracklist"
            :key="track.title"
            style="list-style-type: decimal"
          >
            {{ track.artist }} - {{ track.title }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
const { data: podcast } = await useAsyncData('podcast', () => {
  return queryContent('/podcasts').where({ slug }).findOne();
});

if (podcast.value == null) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Podcast not found',
  });
}
</script>

<style scoped>
header {
  @apply bg-neutral-400;
  @apply text-neutral-900;
}
</style>
