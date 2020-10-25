// 导入路由
import { createRouter, createWebHashHistory } from "vue-router";
// 导入组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
// 子组件
import Gongsi from "../components/Gongsi.vue";
import Lianxi from "../components/Lianxi.vue";
// 定义路由
const routes = [
    // 重定向
    { path: "/", redirect: "/home" },
    { name: "ho", path: "/home", component: Home },
    {
        name: "ab",
        path: "/about/:id",
        component: About,
        children: [
          { path: "/about", redirect: "/gongsi" },
          { name:'gs', path: "/gongsi", component: Gongsi },
          { name:'lx',path: "/lianxi", component: Lianxi }
        ],
        props:router=>({id:router.params.id,name:"张三"})
    }
];
// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
// 导出路由
export default router;