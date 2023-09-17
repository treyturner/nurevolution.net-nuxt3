<template>
  <div v-if="podcast">
    <div>
      <span class="pb-0 text-sm">another dope</span>
      <h1 class="pb-4 pt-0">podcast</h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div>
        <MixcloudPlayer :podcast="podcast"></MixcloudPlayer>

        <div>
          <p>{{ podcast.description }}</p>
        </div>
      </div>

      <div class="w-fit">
        <PodcastDetails :podcast="podcast"></PodcastDetails>
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

<style scoped></style>
