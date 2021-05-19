import React from 'react'


// 路由的监听方式: BrowserRouter:history模式 H5新特性 ; HashRouter: hash模式兼容性强
// 1.导入路由
import { HashRouter, NavLink, Route } from 'react-router-dom';

// 2.组件
import Login from './components/Login/index.jsx'
import User from './components/User/index.jsx'


class App extends React.Component {
  render() {
    return (
      // 3.监听路由变化
      <HashRouter>
        {/* 4.Link 跳转标签 */}
        <NavLink to="/login">去Login</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/user">去User</NavLink>

        {/* 5.Route 组件承载视图 */}
        <Route path="/login" component={Login}></Route>
        <Route path="/user" component={User}></Route>
      </HashRouter>
    )
  }
}


export default App;
