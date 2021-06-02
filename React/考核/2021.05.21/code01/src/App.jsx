import React from 'react'
import './App.css';

import { HashRouter, NavLink, Route, Redirect } from 'react-router-dom'
//#region 引入相关组件
import Animation from './components/Animation/index.jsx'
import VideoCom from './components/VideoCom/index.jsx'
import Usermanage from './components/Usermanage/index.jsx'
//#endregion

class App extends React.Component {
  render() {
    return (
      // 路由监听
      <HashRouter>
        <div className="app-box">
          <div className="app-left">
            <h3>一级导航</h3>
            <NavLink className="ljie" to="/animation">动画</NavLink>
            <br />
            <NavLink className="ljie" to="/video">视频教程</NavLink>
            <br />
            <NavLink className="ljie" to="/usermanage">用户管理</NavLink>
          </div>
          <div className="app-right">
            <Redirect to="/animation" />
            <Route path="/animation" component={Animation} ></Route>
            <Route path="/video" component={VideoCom}></Route>
            <Route path="/usermanage" component={Usermanage}></Route>
          </div>
        </div>
      </HashRouter>
    )
  }
}


export default App


