// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";
// 2.引入组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Gongsi from "../components/Gongsi.vue";
import Lianxi from "../components/Lianxi.vue";
// 3.定义路由
const routes = [
  // 重定向
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  {
    path: "/about",
    component: About,
    children: [
      { path: "/about", redirect: "/gongsi" },
      { path: "/gongsi", component: Gongsi },
      { path: "/lianxi", component: Lianxi }
    ]
  }
];
// 4.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});
// 5.导出路由
export default router;
