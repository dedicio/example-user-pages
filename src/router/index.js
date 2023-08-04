import { createRouter, createWebHistory } from 'vue-router'
import SimpleUser from '../views/SimpleUser.vue'
import DetailedUser from '../views/DetailedUser.vue'

const routes = [
    {
        path: '/simple-user',
        name: 'SimpleUser',
        component: SimpleUser,
    },
    {
        path: '/detailed-user',
        name: 'DetailedUser',
        component: DetailedUser,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
