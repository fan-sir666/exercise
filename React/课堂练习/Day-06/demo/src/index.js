import React from 'react';
import ReactDOM from 'react-dom';

//#region setState的理解
// import SetStateCom from './components/SetStateCom/index.jsx'
//#endregion

//#region 组件性能优化
import ZjXnYouHua from './components/ZjXnYouHua/index.jsx'
//#endregion


ReactDOM.render(
  <React.StrictMode>
    {/* <SetStateCom></SetStateCom> */}
    <ZjXnYouHua></ZjXnYouHua>
  </React.StrictMode>,
  document.getElementById('root')
);

