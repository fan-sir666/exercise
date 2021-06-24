import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//#region useState的使用
import UseStateApp from './useStateApp.jsx';
//#endregion

ReactDOM.render(
  <React.StrictMode>
    <UseStateApp />
  </React.StrictMode>,
  document.getElementById('root')
);

