import * as VueRouter from 'vue-router'
// import {
//     createRouter,
//     createWebHashHistory,
//     RouteRecordRaw,
//     createWebHistory,
// } from "vue-router";
import HelloWorld from '@/components/Hello.vue'

const routes: Array<VueRouter.RouteRecordRaw> = [
    {
        path: '/',
        // name: 'main',
        component: HelloWorld
    }
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})