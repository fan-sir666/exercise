import { createRouter, createWebHashHistory } from "vue-router";

// 导入登录组件
import Login from "../views/Login.vue";
const routes = [
  // 重定向
  { path: "/", redirect: "/login" },
  // 登录
  { path: "/login", component: Login }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
