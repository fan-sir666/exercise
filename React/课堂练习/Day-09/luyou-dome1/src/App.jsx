import React from 'react'


// 路由的监听方式: BrowserRouter:history模式 H5新特性 ; HashRouter: hash模式兼容性强
// 1.导入路由
import {HashRouter,Link,Route} from 'react-router-dom';

// 2.组件
import Home from './components/Home/index.jsx'
import About from './components/About/index.jsx'


class App extends React.Component{
  render(){
    return(
      // 3.监听路由变化
      <HashRouter>
        {/* 4.Link 跳转标签 */}
        <Link to="/home">去Home</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about">去About</Link>

        {/* 5.Route 组件承载视图 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </HashRouter>
    )
  }
}


export default App;
