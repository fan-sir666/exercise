import React from 'react';
import ReactDOM from 'react-dom';


//#region 组件样式
// import ComStyle from './components/ComStyle/index.jsx'
//#endregion

//#region Css模块化
// import CssMkh from './components/CssMkh/index.jsx'
//#endregion


//#region styled-component样式包
// 基本使用
// import ComStyleBao from './components/ComStyleBao/index.jsx'

// 样式使用React的属性
// import ComStyleBaoProps from './components/ComStyleBaoProps/index.jsx'

// 样式继承
// import ComStyleBaoExtends from './components/ComStyleBaoExtends/index.jsx'

//#endregion

//#region 动画
// 原生动画
// import ComDhua from './components/ComDhua/index.jsx'

// react-transition-group动画插件的基本使用
import ComDhuaCjian from './components/ComDhuaCjian/index.jsx'
//#endregion


ReactDOM.render(
  // <React.StrictMode>
  //   <ComDhuaCjian></ComDhuaCjian>
  // </React.StrictMode>,
    <ComDhuaCjian/>,
  document.getElementById('root')
);

