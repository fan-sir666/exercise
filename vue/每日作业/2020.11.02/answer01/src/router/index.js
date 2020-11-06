import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home/index.vue";
const routes = [
    // 首页
    { path: '/', component: Home },
    // 答题页
    {
        path: '/item',
        component: () =>
            import ("../components/Item/index.vue")
    },
    // 打分页
    {
        path: '/score',
        component: () =>
            import ("../components/Score/index.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;