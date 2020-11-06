import { createRouter, createWebHashHistory } from "vue-router";
// 导入组件
import Home from "@/components/Home";

const routes = [
  // 开始答题
  { path: "/", component: Home },
  // 题目
  { path: "/item", component: () => import("@/components/Item") },
  // 打分
  { path: "/score", component: () => import("@/components/Score")}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
