import React from 'react';
import ReactDOM from 'react-dom';
// 为了让页面变得美观，引入antd.css
import 'antd/dist/antd.css';
//#region 使用react-redux 映射获取
import {Provider} from 'react-redux'
import store from './store/index'
//#endregion
import App from './App.jsx';
ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);