import React from 'react';
import ReactDOM from 'react-dom';

// 生命周期挂载阶段
// import App1 from './App1';

// 生命周期更新阶段 触发时机 setState
// import App2 from './App2';

// 生命周期更新阶段 触发时机 forceUpdate
// import App3 from './App3';

// 生命周期更新阶段 触发时机 New props
// import App4 from './App4';

// 生命周期销毁阶段 
import App5 from './App5';

ReactDOM.render(
  <React.StrictMode>
    <App5 />
  </React.StrictMode>,
  document.getElementById('root')
);

