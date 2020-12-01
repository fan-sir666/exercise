import { createRouter, createWebHashHistory } from "vue-router";

// 导入登录组件
import Login from "../views/Login.vue";
const routes = [
    // 重定向
    { path: "/", redirect: "/login" },
    // 登录
    { name: "Login", path: "/login", component: Login },
    // 首页
    {
        name: "Home",
        path: "/home",
        component: () =>
            import ("@/views/Home.vue"),
        children: [
            { path: "/home", redirect: "/welcome" },
            // welcome组件
            {
                path: "/welcome",
                component: () =>
                    import ("@/components/Welcome")
            },
            // Users组件
            {
                path: "/users",
                component: () =>
                    import ("@/components/Users")
            },
            // Rights组件
            {
                path: "/rights",
                component: () =>
                    import ("@/components/Rights")
            },
            // Roles组件
            {
                path: "/roles",
                component: () =>
                    import ("@/components/Roles")
            },
            // Reports组件
            {
                path: "/reports",
                component: () =>
                    import ("@/components/Reports")
            },
             // Orders组件
             {
                path: "/orders",
                component: () =>
                    import ("@/components/Orders")
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
// 定义路由导航守卫
// to: 代表我要去哪个个路由
// from: 代表我来自于哪个路由
// next代表: 下一步要去哪里 如果next() 代表放行  如果next("/login")代表必须跳转到login这个路由
router.beforeEach((to, from, next) => {
    // 获取token
    let isAuthenticated = window.sessionStorage.getItem("token");
    // 如果将要去的地方 不是Login 且没有授权 要强制跳转到Login页面
    if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
    else next();
});

export default router;