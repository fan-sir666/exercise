import React, { Fragment } from 'react'

import { NavLink, Route, HashRouter } from 'react-router-dom'

import Home from './components/Home/index.jsx'
import About from './components/About/index.jsx'
import User from './components/User/index.jsx'

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

                    <Route path="/home" component={Home} />
                    <Route path="/about/:id" component={About} />
                    <Route path="/user" component={User} />
                </HashRouter>
            </Fragment>
        )
    }
}

export default App;
