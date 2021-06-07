import React from 'react';
import './App.css';
// 导入store
import store from './store/index.js'
// 导入action
import { addData, delData, fixData, fixKey, clearStatus } from './store/action.js'

class App extends React.Component {
  // 初始化状态
  constructor() {
    super();
    this.state = store.getState();
    // 创建添加Input的Ref
    this.inputRef = React.createRef();
  }

  //#region 1.3 添加
  handleAdd = () => {
    let val = this.inputRef.current.value
    if (val.trim().length === 0) return alert('添加内容不能为空!!!');
    // 处理数据
    let task = {
      id: new Date().valueOf(),
      info: val,
      status: false
    }
    // 传递数据
    store.dispatch(addData(task));
    // 清空输入框
    this.inputRef.current.value = '';
  }
  //#endregion
  //#region 2.2 删除
  handleDel = (id) => {
    store.dispatch(delData(id))
  }
  //#endregion
  //#region 3.2 更改任务状态
  changeChecked = (id) => {
    store.dispatch(fixData(id))
  }
  //#endregion
  //#region 4.1 切换任务
  updataCate = (key) => {
    store.dispatch(fixKey(key))
  }
  // 4.5 处理对应的任务列表
  taskList = () => {
    if (this.state.activeKey === 'undone') {
      return this.state.list.filter(item => !item.status);
    } else if (this.state.activeKey === 'done') {
      return this.state.list.filter(item => item.status);
    } else {
      return this.state.list
    }
  }
  //#endregion
  //#region 5.1 清除已完成
  clearChecked = () => {
    store.dispatch(clearStatus())
  }
  //#endregion
  componentDidMount() {
    // console.log(this.state);
    // 监听状态改变 更新数据
    store.subscribe(() => {
      this.setState({
        list: store.getState().list,
        activeKey: store.getState().activeKey
      }, () => {
        // console.log(this.state);
      })
    })
  }
  render() {
    return (
      <div className="App todo" >
        {/* 输入框及搜索按钮 */}
        < div className="todo-header" >
          {/* 1.1 绑定ref */}
          <input type="text" placeholder="请输入任务" ref={this.inputRef} />
          {/* 1.2 绑定添加事件 */}
          <button onClick={() => this.handleAdd()}>添加事项</button>
        </div>
        {/* 列表 */}
        < ul className="todo-main" >
          {this.taskList().map(item => (
            <li key={item.id}>
              {/* 3.1 更新复选框状态 */}
              <input type="checkbox" checked={item.status} onChange={() => this.changeChecked(item.id)} /><span>{item.info}</span>
              {/* 2.1 绑定删除事件 */}
              <a href="#!" onClick={() => this.handleDel(item.id)}>删除</a>
            </li>
          ))}
        </ul >
        {/* 底部菜单 */}
        < div className="todo-footer" >
          <p>共有{this.taskList().length}条数据</p>
          <div className="todo-footer-button">
            <button onClick={() => this.updataCate('all')} className={this.state.activeKey === 'all' ? 'primary' : ''}>全&nbsp;&nbsp;部</button>
            <button onClick={() => this.updataCate('undone')} className={this.state.activeKey === 'undone' ? 'primary' : ''}>未完成</button>
            <button onClick={() => this.updataCate('done')} className={this.state.activeKey === 'done' ? 'primary' : ''}>已完成</button>
          </div>
          <a href="#!" onClick={() => this.clearChecked()}>清除已完成</a>
        </div >
      </div >
    );
  }
}
export default App;
