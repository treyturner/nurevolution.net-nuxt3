<template>
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
          <div class="text-neutral-800">{{ podcast.mixedBy }}</div>
          <div class="pr-1 text-neutral-800">
            {{ formatDate(podcast.releaseDate) }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({ podcast: { type: Object, required: true } });
const { podcast } = props;
</script>

<style></style>
