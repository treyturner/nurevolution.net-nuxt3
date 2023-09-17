<template>
  <div>
    <iframe
      height="480"
      width="480"
      :src="`//www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${podcast.mixcloudSlug}%2F`"
      frameborder="0"
      class="pb-4"
    ></iframe>
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
