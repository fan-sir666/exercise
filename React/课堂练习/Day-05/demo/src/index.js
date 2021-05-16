import React from 'react';
import ReactDOM from 'react-dom';
// 初始想法:让一个图片跟着鼠标移动
// import Mouse from './components/Mouse/index.jsx'
/* 
需求: 让Mouse组件更加复用，把他作为 共享的行为 组件
*/
import App from './components/RenderProps/index.jsx';

ReactDOM.render(
  <React.StrictMode>
    {/* <Mouse/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);