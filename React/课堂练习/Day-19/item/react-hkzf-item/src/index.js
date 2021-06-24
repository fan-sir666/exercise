import React from 'react';
import ReactDOM from 'react-dom';
// antd库的样式
import 'antd-mobile/dist/antd-mobile.css';
// 字体图标
import './assets/fonts/iconfont.css'
// 全局样式
import './index.css';
//#region 路由应用
import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes/index'
//#endregion

ReactDOM.render(
  <HashRouter>
    {/* <React.StrictMode> */}
      {renderRoutes(routes)}
    {/* </React.StrictMode> */}
  </HashRouter>,
  document.getElementById('root')
);
