// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";
// 2.引入组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
// 3.定义路由
const routes = [
  // 重定向
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  // 路由传参方式一
  // { path: "/about/:id", component: About }
  // 路由传参方式二
  // { path: "/about/:id", component: About, props: true }
  // 路由传参方式三
  {
    path: "/about/:id",
    component: About,
    props: router => ({ id: router.params.id, name: "张三" })
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
