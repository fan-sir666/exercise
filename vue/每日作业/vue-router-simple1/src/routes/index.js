// 导入vue-router
import { createRouter, createWebHashHistory } from "vue-router";
// 导入组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
// 定义路由
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];
// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
// 导出路由
export default router;
