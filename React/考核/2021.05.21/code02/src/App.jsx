import React from 'react';
// 使用styled-components样式包
import styled from 'styled-components';
// 路由插件
import { HashRouter, NavLink } from 'react-router-dom'
// 路由管理插件
import { renderRoutes } from 'react-router-config'
// 路由配置文件
import routes from './routes/index.js'


class App extends React.Component {
  render() {
    return (
      // 路由监听
      <HashRouter>
        <DivBox>
          <div className="box-left">
            <h3>一级导航:</h3>
            <NavLink className='lanjie' to='/animation'>动画</NavLink>
            <NavLink className='lanjie' to='/videocom'>视频教程</NavLink>
            <NavLink className='lanjie' to='/usermanage'>用户管理</NavLink>
          </div>
          <div className="box-right">
            {renderRoutes(routes)}
          </div>
        </DivBox>
      </HashRouter>
    )
  }
}


//#region 样式组件
const DivBox = styled.div`
display: flex;
height: 100%;
.box-left {
  width: 300px;
  background-color: #ccc;
  .lanjie{
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    color: #333;
    text-decoration: none;
  }
  .lanjie.active {
    font-weight: 700;
    color: red;
  }
}
.box-right {
 flex: 1;
 padding: 20px;
}
`
//#endregion

export default App;