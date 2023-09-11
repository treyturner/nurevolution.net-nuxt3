<template>
  <div>
    <div>
      <p class="pb-0 text-sm">another dope</p>
      <h1 class="pb-4 pt-0 text-3xl">podcast</h1>
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
        <header>podcast details</header>
        <p>title: {{ podcast.title }}</p>
        <p>mixed by: {{ podcast.mixedBy }}</p>
        <p>release date: {{ formatDate(podcast.releaseDate).toLowerCase() }}</p>
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

<script setup>
const { slug } = useRoute().params;
const { data: podcast } = await useAsyncData('podcast', () => {
  return queryContent('/podcasts').where({ slug }).findOne();
});
</script>

<style scoped></style>
