// 1.引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";
// 2.引入组件
import Home from "../components/Home.vue";
import Zhdlu from "../components/Zhdlu.vue";
import Smdlu from "../components/Smdlu.vue";
// 3.定义路由
const routes = [
  // 重定向
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home ,
  children:[
    { path: "/home", redirect: "/zhdlu" },
    { path: "/zhdlu", component: Zhdlu },
    { path: "/smdlu", component: Smdlu },
  ]
},
];
// 4.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});
// 5.导出路由
export default router;
