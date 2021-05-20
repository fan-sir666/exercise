import React, { Fragment } from 'react'

// 导入路由插件
import { NavLink, HashRouter } from 'react-router-dom'
// 导入路由统一管理插件
import {renderRoutes} from 'react-router-config'
// 导入路由
import routes from './routes'

class App extends React.Component {
    state = {
        paramsObj:{
            pathname:'/user',
            state:{
                name:'zs',
                age:18,
                hobby: ['football', 'pingpang']
            }
        }
    }
    render() {
        return (
            <Fragment>
                <HashRouter>
                    {/* 传参方式一 通过URL */}
                    <NavLink to="/home?name=zs&age=18&hobby=football&hobby=pingpang">toHome</NavLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* 传参方式二 动态传参 直接/1524854 对应的视图route /:id  */}
                    <NavLink to="/about/125485545">toAbout</NavLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* 传参方式三 通过to属性传递一个对象 */}
                    <NavLink to={this.state.paramsObj}>toUser</NavLink>

                    {/* renderRoutes 视图容器 将路由放进去 */}
                    {renderRoutes(routes)}
                </HashRouter>
            </Fragment>
        )
    }
}

export default App;
