import React from 'react';
import ReactDOM from 'react-dom';
// 为了让页面变得美观，引入antd.css
import 'antd/dist/antd.css';
import App from './App.jsx';

import {Provider} from 'react-redux'
import store from './store/store.js'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);