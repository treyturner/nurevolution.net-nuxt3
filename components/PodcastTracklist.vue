<template>
  <div>
    <span>Tracklist:</span>
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

<style></style>
