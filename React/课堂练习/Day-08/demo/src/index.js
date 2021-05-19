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

// react-transition-group动画插件的基本使用  CSSTransition
// 插件动画开始和离开
// import ComDhuaCjian from './components/ComDhuaCjian/index1.jsx'
// 插件的基本使用 appear  unmountOnExit 属性的作用
// import ComDhuaCjian from './components/ComDhuaCjian/index2.jsx'
// 插件 获取执行动画各阶段 的元素
// import ComDhuaCjian from './components/ComDhuaCjian/index3.jsx'

// SwitchTransition 切换动画
// import ComDhuaCjian from './components/ComDhuaCjian/index4.jsx'

// TransitionGroup 列表切换动画
import ComDhuaCjian from './components/ComDhuaCjian/index5.jsx'
//#endregion


ReactDOM.render(
    <ComDhuaCjian/>,
  document.getElementById('root')
);

