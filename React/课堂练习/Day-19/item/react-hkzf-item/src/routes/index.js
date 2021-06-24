import { Redirect } from 'react-router-dom'
//#region 一级路由组件
import App from '../App.jsx'
//#endregion
//#region 二级路由组件
import Home from '../pages/Home/Home.jsx'
import FindHouse from '../pages/FindHouse/FindHouse.jsx'
import News from '../pages/News/News.jsx'
import Profile from '../pages/Profile/Profile.jsx'
//#endregion
const routes = [{
    path: '/',
    component: App,
    routes: [
        // 重定向
        {
            path: '/',
            exact: true,
            render: () => < Redirect to = { "/home" }
            />
        },
        // 首页
        {
            path: '/home',
            component: Home
        },
        // 找房
        {
            path: '/findhouse',
            component: FindHouse
        },
        // 资讯
        {
            path: '/news',
            component: News
        },
        // 我的
        {
            path: '/profile',
            component: Profile
        },

    ]
}]

export default routes