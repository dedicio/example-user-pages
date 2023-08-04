<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
})
</script>

<template>
    <h1 class="title">{{ text }}</h1>
</template>

<style scoped>
.title {
    font-size: 2rem;
    margin: 0;
}
</style>