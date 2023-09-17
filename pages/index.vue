<template>
  <div>
    <h1>releases</h1>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <li v-for="podcast in podcasts" :key="podcast.slug">
        <PodcastCard :podcast="podcast"></PodcastCard>
      </li>
      <InfiniteLoading
        :distance="props.distance"
        :slots="props.scrollSlots"
        @infinite="load"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InfiniteLoading from 'v3-infinite-loading';
import 'v3-infinite-loading/lib/style.css';
import type { Podcast } from '~/types';

const props = defineProps({
  scrollSlots: {
    type: Object,
    default() {
      return { complete: ' ', error: 'Error loading podcasts :(' };
    },
  },
  distance: {
    type: Number,
    default() {
      return 100;
    },
  },
});

const podcasts = ref<Podcast[]>([]);
const pageSize = 6;
let page = 1;

const load = async ($state: {
  complete: () => void;
  loaded: () => void;
  error: () => void;
}) => {
  try {
    const json = await queryContent<Podcast>('/podcasts')
      .sort({ releaseDate: -1 })
      .limit(pageSize)
      .skip(pageSize * (page++ - 1))
      .find();
    podcasts.value.push(...json);
    json.length < pageSize ? $state.complete() : $state.loaded();
  } catch (error) {
    $state.error();
  }
};
</script>

<style scoped></style>
