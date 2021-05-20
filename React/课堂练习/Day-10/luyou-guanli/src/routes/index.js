// 使用React-router-config 来 统一管理路由

//#region 1. 导入相关组件
import Home from '../components/Home/index.jsx'
import About from '../components/About/index.jsx'
import User from '../components/User/index.jsx'
import AboutMy from '../components/AboutMy/index.jsx';
import AboutHer from '../components/AboutHer/index.jsx';
import {Redirect} from 'react-router-dom'
//#endregion

// 2. 创建路由规则
const routes = [
    // 重定向
    {
        path:'/',
        exact: true,
        component:() => <Redirect to="/home?name=zs&age=18&hobby=football&hobby=pingpang"/>
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about/:id',
        component:About,
        routes:[
            {path:'/about/:id/my',component:AboutMy},
            {path:'/about/:id/her',component:AboutHer},
        ]
    },
    {
        path:'/user',
        component:User
    }
]

// 3. 导出路由
export default routes;