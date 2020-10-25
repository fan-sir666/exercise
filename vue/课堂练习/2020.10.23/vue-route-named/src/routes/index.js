// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";
// 2.引入组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
// 3.定义路由
const routes = [
  { path: "/", redirect: "/home" },
  { name: "ho", path: "/home", component: Home },
  {
    name: "ab",
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
