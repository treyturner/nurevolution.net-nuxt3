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
      <InfiniteLoading @infinite="load" />
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InfiniteLoading from 'v3-infinite-loading';
import 'v3-infinite-loading/lib/style.css';

const podcasts = ref([]);
const pageSize = 3;
let page = 1;

const load = async ($state) => {
  try {
    const json = await queryContent('/podcasts')
      .sort({ releaseDate: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .find();
    if (json.length < pageSize) $state.complete();
    else {
      podcasts.value.push(...json);
      $state.loaded();
    }
    page++;
  } catch (error) {
    $state.error();
  }
};
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
