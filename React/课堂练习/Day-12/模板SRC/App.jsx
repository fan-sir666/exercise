import React from 'react';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App todo" >
        {/* 输入框及搜索按钮 */}
        < div className="todo-header" >
          <input type="text" placeholder="请输入任务" />
          <button>添加事项</button>
        </div>
        {/* 列表 */}
        < ul className="todo-main" >
          <li >
            <input type="checkbox"/> <span>哈哈,来了老弟</span>
            <a href="#!">删除</a>
          </li>
        </ul >
        {/* 底部菜单 */}
        < div className="todo-footer" >
          <p>0条剩余</p>
          <div className="todo-footer-button">
           
            <button>全&nbsp;&nbsp;部</button>
            <button>未完成</button>
            <button>已完成</button>
          </div>
          <a href="#!" >清除已完成</a>
        </div >
      </div >
    );
  }
}

export default App;
