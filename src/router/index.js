import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        componemt: Home
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router;