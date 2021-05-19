import React from 'react'
import './App.css'

// NavLink 的 属性应用

// 1.导入路由
import {HashRouter,NavLink,Route} from 'react-router-dom';

// 2.组件
import Home from './components/Home/index.jsx'
import About from './components/About/index.jsx'


class App extends React.Component{
  render(){
    return(
      // 3.监听路由变化
      <HashRouter>
        {/* 4.NavLink
        exact 精确匹配(不在是暴力匹配的算法模式) 链接和视图都要写成对出现的
        activeClassName 类选择器添加样式 和 activeStyle 行内添加样式
        */}
        <NavLink exact activeStyle={{color:'yellow'}} to="/home">去Home</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink exact activeClassName='active' to="/about">去About</NavLink>

        {/* 5.Route 组件承载视图 */}
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
      </HashRouter>
    )
  }
}


export default App;
