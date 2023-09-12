<template>
  <div>
    <h1>releases</h1>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <li v-for="podcast in podcasts" :key="podcast.slug">
        <div
          class="border-2 border-r-neutral-900 border-b-neutral-900 border-t-neutral-400 border-l-neutral-400 border-opacity-40"
        >
          <NuxtLink :to="`/podcast/${podcast.slug}`">
            <img :src="`/img/podcasts/${podcast.coverArt.full}`" />
            <div class="bg-neutral-200 pl-1 pb-0.5">
              <div class="text-base truncate text-neutral-800">
                {{ podcast.title }}
              </div>
              <div class="flex text-xs justify-between text-neutral-800">
                <div class="text-neutral-800">by {{ podcast.mixedBy }}</div>
                <div class="pr-1 text-neutral-800">
                  {{ formatDate(podcast.releaseDate) }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </li>
      <InfiniteLoading :slots="props.scrollOpts" @infinite="load" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InfiniteLoading from 'v3-infinite-loading';
import 'v3-infinite-loading/lib/style.css';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Podcast extends ParsedContent {
  slug: string;
  title: string;
  mixedBy: string;
  djs: string[];
  releaseDate: string;
  description: string;
  duration: string;
  filename: string;
  filesize: number;
  mixcloudSlug: string;
  spotifyPlaylist?: string;
  coverArt: {
    full: string;
  };
  tracklist?: {
    artist: string;
    title: string;
    startTime?: string;
  }[];
}

const props = defineProps({
  scrollOpts: {
    type: Object,
    default() {
      return { complete: ' ', error: 'Error loading podcasts :(' };
    },
  },
});

const podcasts = ref<Podcast[]>([]);
const pageSize = 3;
let page = 1;

const load = async ($state: any) => {
  try {
    const json = await queryContent<Podcast>('/podcasts')
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

<style scoped></style>
