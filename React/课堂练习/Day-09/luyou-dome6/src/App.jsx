import React from 'react'

// 手动跳转 在about组件中应用了 

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
        <NavLink to="/home">去Home</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/about">去About</NavLink>

        {/* 5.Route 组件承载视图 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </HashRouter>
    )
  }
}


export default App;
