<template>
  <div>
    <header>{{ podcast.title }}</header>

    <div class="container">
      <div>Mixed by {{ podcast.mixedBy }}</div>
      <div>Runtime: {{ podcast.duration }}</div>
      <div>Released {{ formatDate(podcast.releaseDate) }}</div>
    </div>

    <PodcastTracklist :podcast="podcast"></PodcastTracklist>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  podcast: {
    type: Object,
    required: true,
  },
});
const { podcast } = props;
</script>

<style>
header {
  @apply bg-neutral-400;
  @apply text-neutral-900;
}
</style>
