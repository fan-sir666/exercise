import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/Home.vue'

const routes = [
    // 从定向
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // 懒加载
        component: () =>
            import ('../components/About.vue')
    },
    // 404页面
    {
        path: '*',
        component: () =>
            import ('../components/NotFound.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router;