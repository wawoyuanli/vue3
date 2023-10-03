import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'intiPage',
        component: () => import('@/views/H-Home.vue'),
    },
    {
        path: '/home',
        name: 'h-home',
        component: () => import('@/views/H-Home.vue')
    },
    {
        path: '/swiper',
        name: 'h-swiper',
        component: () => import('@/views/Swiper.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router