import { createRouter, createWebHashHistory } from "vue-router";
// 导入组件
import Users from "../components/Users.vue"
const routes = [
    { path: "/", redirect: "/users" },
    { path: "/users", component: Users },
    {
        path: "/xiangqing/:id",
        component: () =>
            import ("../components/Xiangqing.vue"),
        props: true
    },
    {
        name: "qx",
        path: "/quanxian",
        component: () =>
            import ("../components/Quanxian.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;