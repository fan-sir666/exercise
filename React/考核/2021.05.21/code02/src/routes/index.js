import {Redirect} from 'react-router-dom'
//#region 相关组件
//#region 一级路由
import Animation from '../components/Animation/index.jsx'
import VideoCom from '../components/VideoCom/index.jsx'
import Usermanage from '../components/Usermanage/index.jsx'
//#endregion
//#region 二级路由 VideoCom
import WebVideo from '../components/VideoCom/web.jsx'
import VueVideo from '../components/VideoCom/vue.jsx'
import ReactVideo from '../components/VideoCom/react.jsx'
import PhpVideo from '../components/VideoCom/php.jsx'
//#endregion
//#region 二级路由 Usermanage
import WebUsermanage from '../components/Usermanage/web.jsx'
import VueUsermanage from '../components/Usermanage/vue.jsx'
import ReactUsermanage from '../components/Usermanage/react.jsx'
import PhpUsermanage from '../components/Usermanage/php.jsx'
//#endregion
//#endregion

const routes = [
    // 重定向
    {
        path:'/',
        exact:true,
        component:()=><Redirect to='/animation'/>
    },
    // 一级路由
    {
        path:'/animation',
        component:Animation
    },
    {
        path:'/videocom',
        component:VideoCom,
        routes:[
            {
                path:'/videocom',
                exact:true,
                component:()=><Redirect to='/videocom/web'/>
            },
            {
                path:'/videocom/web',
                component:WebVideo
            },
            {
                path:'/videocom/vue',
                component:VueVideo
            },
            {
                path:'/videocom/react',
                component:ReactVideo
            },
            {
                path:'/videocom/php',
                component:PhpVideo
            },
        ]
    },
    {
        path:'/usermanage',
        component:Usermanage,
        routes:[
            {
                path:'/usermanage',
                exact:true,
                component:()=><Redirect to='/usermanage/web?name=鲁正一&age=22'/>
            },
            {
                path:'/usermanage/web',
                component:WebUsermanage
            },
            {
                path:'/usermanage/vue',
                component:VueUsermanage
            },
            {
                path:'/usermanage/react',
                component:ReactUsermanage
            },
            {
                path:'/usermanage/php',
                component:PhpUsermanage
            },
        ]
    }
]

export default routes;