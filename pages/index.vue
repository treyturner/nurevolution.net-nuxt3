<template>
  <div>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-auto pl-5"
    >
      <li v-for="podcast in podcasts" :key="podcast.slug">
        <div
          class="border-2 border-r-neutral-900 border-b-neutral-900 border-t-neutral-400 border-l-neutral-400 border-opacity-40"
        >
          <NuxtLink :to="`/podcast/${podcast.slug}`">
            <img :src="`/img/podcasts/${podcast.coverArt.full}`" />
            <div class="bg-neutral-200 text-neutral-800 pl-1 pb-0.5">
              <div class="text-base truncate">{{ podcast.title }}</div>
              <div class="flex text-xs justify-between">
                <div>by {{ podcast.mixedBy }}</div>
                <div class="pr-1">{{ formatDate(podcast.releaseDate) }}</div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="text-xs float-right pr-1.5"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: podcasts } = await useAsyncData('podcasts', () => {
  return queryContent('/podcasts').sort({ releaseDate: -1 }).find();
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 36px;
}
p {
  margin: 20px;
}
</style>
1
