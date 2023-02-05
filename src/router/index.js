import { createRouter, createWebHistory } from 'vue-router'


const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path:'/',
            redirect:'/ar'
        },
        {
            path:'/ar',
            component: () => import('@/views/Home.vue')
        },
        {
            path:'/tool/gen',
            component: () => import('../views/tool/gen/index.vue')
        },
        {
            path:'/tool/gen-edit/index/:tableId(\\d+)',
            component: () => import('@/views/tool/gen/editTable.vue')
        },
    ]
})

export default router