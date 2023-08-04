<script setup>
import { onMounted, reactive } from 'vue'
import { getRandomUser } from '../services/userService'
import Wrapper from '../components/Wrapper.vue'
import Title from '../components/Title.vue'
import Description from '../components/Description.vue'
import Photo from '../components/Photo.vue'

const user = reactive({
    name: '',
    email: '',
    picture: ''
});

onMounted(() => {
    getRandomUser().then(({ name, email, picture }) => {
        const { first, last } = name;
        const userName = `${first} ${last}`;

        user.name = userName;
        user.email = email;
        user.picture = picture.large;
    })
})
</script>

<template>
    <Wrapper>
        <Title :text="user.name" />
        <Description :text="user.email" />
        <Photo :url="user.picture" :alt="user.name" />
    </Wrapper>
</template>
