import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

//#region 导入相关组件
// 第一题
import CalcPrice from "../components/CalcPrice.vue";
// 第二题
import Slide from "../components/Slide.vue";
import TabImg from "../components/TabImg.vue";
// 第三题
import ToDoList from "../components/ToDoList.vue";
// 第四题
import MsgBoard from "../components/MsgBoard.vue";
//#endregion

// 声明路由
const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/calcPrice' },
    {
        path: '/calcPrice',
        component: CalcPrice
    },
    {
        path: '/slide',
        component: Slide
    },
    {
        path: '/tabImg',
        component: TabImg
    },
    {
        path: '/todoList',
        component: ToDoList
    },
    { path: '/msgBoard', component: MsgBoard },
]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 导出路由
export default router;