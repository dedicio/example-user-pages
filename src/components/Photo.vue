<script setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
})
</script>

<template>
  <img :src="url" :alt="alt" class="photo">
</template>

<style scoped>
.photo {
  border-radius: 50%;
}
</style>