<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
})
</script>

<template>
  <p class="description">{{ text }}</p>
</template>

<style scoped>
.description {
  font-style: italic;
}
</style>