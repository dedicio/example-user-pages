<script setup>
import { onMounted, ref } from 'vue'
import { getRandomUser } from '../services/userService'
import Title from '../components/Title.vue'
import Wrapper from '../components/Wrapper.vue'

const userName = ref('');

onMounted(() => {
    getRandomUser().then(({ name }) => {
        const { first, last } = name;
        userName.value = `${first} ${last}`;
    })
})
</script>

<template>
    <Wrapper>
        <Title :text="userName" />
    </Wrapper>
</template>
