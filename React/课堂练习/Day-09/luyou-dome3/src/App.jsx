import React from 'react'
import './App.css'

// Switch 的使用及作用

// 1.导入路由
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';

// 2.组件
import Home from './components/Home/index.jsx'
import About from './components/About/index.jsx'
import DefaultCom from './components/DefaultCom/index.jsx'


class App extends React.Component {
  render() {
    return (
      // 3.监听路由变化
      <HashRouter>

        <NavLink exact activeStyle={{ color: 'yellow' }} to="/home">去Home</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink exact activeClassName='active' to="/about">去About</NavLink>
        {/* Switch 将 视图元素 包裹起来 只匹配一个 匹配到就不继续匹配了 */}
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route component={DefaultCom}></Route>
        </Switch>
      </HashRouter>
    )
  }
}


export default App;
