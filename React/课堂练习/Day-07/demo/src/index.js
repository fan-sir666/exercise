import React from 'react';
import ReactDOM from 'react-dom';

//#region 函数组件优化
// import ComFnYh from './components/ComFnYh/index.jsx'
//#endregion

//#region 组件渲染到其它元素中
// import Portals from './components/Portals/index.jsx'
//#endregion

//#region 组件只能有一个根标签 Fragment的作用占位符
import Fragment from './components/Fragment/index.jsx'
//#endregion

/* 
StrictMode  严格模式检查仅在开发模式下运行；它们不会影响生产构建。
作用:
1. 识别不安全的生命周期
2. 关于使用过时字符串 ref API 的警告
3. 关于使用废弃的 findDOMNode 方法的警告
4. 检测意外的副作用
5. 检测过时的 context API
*/
ReactDOM.render(
  <React.StrictMode>
    <Fragment></Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

