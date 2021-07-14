import { Redirect } from 'react-router-dom'
//#region 一级路由组件
import App from '../App.jsx'
import CityList from '../pages/CityList/CityList.jsx'
import Search from '../pages/Search/Search.jsx'
import BdMap from '../pages/BdMap/BdMap.jsx'
//#endregion
//#region 二级路由组件
import Home from '../pages/Home/Home.jsx'
import FindHouse from '../pages/FindHouse/FindHouse.jsx'
import News from '../pages/News/News.jsx'
import Profile from '../pages/Profile/Profile.jsx'
//#endregion
const routes = [
    {
        path: '/',
        exact: true,
        render: () => < Redirect to = { "/tab/home" }
        />
    },
    {
        path: '/tab',
        component: App,
        routes: [
            // 重定向
            {
                path: '/tab',
                exact: true,
                render: () => < Redirect to = { "/tab/home" }
                />
            },
            // 首页
            {
                path: '/tab/home',
                component: Home
            },
            // 找房
            {
                path: '/tab/findhouse',
                component: FindHouse
            },
            // 资讯
            {
                path: '/tab/news',
                component: News
            },
            // 我的
            {
                path: '/tab/profile',
                component: Profile
            },

        ]
    },
    {
        path:'/citylist',
        component:CityList
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/bdmap',
        component:BdMap
    }
]

export default routes