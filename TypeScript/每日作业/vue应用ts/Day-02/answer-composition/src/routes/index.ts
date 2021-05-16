import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router";

// 导入相关组件
import Home from "../components/Home/index.vue";
const routes:Array<RouteRecordRaw> = [
    // 首页
    { path: '/', component: Home },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;