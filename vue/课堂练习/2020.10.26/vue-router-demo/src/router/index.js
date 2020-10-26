import { createRouter, createWebHashHistory } from "vue-router";
// 导入组件
import Users from "../components/Users.vue";
const routes = [
    // 重定向
    { path: "/", redirect: "/users" },
    // 用户
    { path: "/users", component: Users },
    // 权限
    {
        name: "qx",
        path: "/quanxian",
        component: () =>
            import ("../components/Quanxian.vue")
    },
    // 商品
    {
        name: "sp",
        path: "/shangpin",
        component: () =>
            import ("../components/Shangpin.vue")
    },
    // 订单
    {
        name: "dd",
        path: "/dingdan",
        component: () =>
            import ("../components/Dingdan.vue")
    },
    // 系统
    {
        name: "xt",
        path: "/xitong",
        component: () =>
            import ("../components/Xitong.vue")
    },
    // 详情
    {
        name: "xq",
        path: "/xiangqing/:id",
        component: () =>
            import ("../components/Xiangqing.vue"),
        props: true
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;