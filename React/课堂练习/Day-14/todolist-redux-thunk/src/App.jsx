import React, { createRef } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getData, addData, delData, fixChecked, fixData,clearData } from './store/action'
class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  componentDidMount() {
    // 获取初始数据
    this.props.handleDate();
  }
  //#region 更新渲染列表
  taskList = () => {
    if (this.props.activeKey === 'undone') {
      return this.props.list.filter(item => !item.status)
    }else if (this.props.activeKey === 'done') {
      return this.props.list.filter(item => item.status)
    }else {
      return this.props.list
    }
  }
  //#endregion

  render() {
    return (
      <div className="App todo" >
        {/* 输入框及搜索按钮 */}
        < div className="todo-header" >
          <input type="text" placeholder="请输入任务" ref={this.inputRef} />
          <button onClick={() => this.props.addDate(this.inputRef)}>添加事项</button>
        </div>
        {/* 列表 */}
        < ul className="todo-main" >
          {
            this.taskList().map(item => (
              <li key={item.id}>
                <input type="checkbox" checked={item.status} onChange={() => this.props.changeChecked(item.id)} /> <span>{item.info}</span>
                <a href="#!" onClick={() => this.props.minusData(item.id)}>删除</a>
              </li>
            ))
          }
        </ul >
        {/* 底部菜单 */}
        < div className="todo-footer" >
          <p>共有{this.taskList().length}条任务</p>
          <div className="todo-footer-button">
            <button onClick={() => this.props.changeDate('all')} className={this.props.activeKey === 'all' ? 'primary' : ''}>全&nbsp;&nbsp;部</button>
            <button onClick={() => this.props.changeDate('undone')} className={this.props.activeKey === 'undone' ? 'primary' : ''}>未完成</button>
            <button onClick={() => this.props.changeDate('done')} className={this.props.activeKey === 'done' ? 'primary' : ''}>已完成</button>
          </div>
          <a href="#!" onClick={()=>this.props.clearChecked()}>清除已完成</a>
        </div >
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    activeKey: state.activeKey
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //#region 获取数据
    handleDate() {
      dispatch(getData)
    },
    //#endregion
    //#region 添加任务
    addDate(props) {
      const val = props.current.value;
      if (val.trim().length <= 0) return alert('添加任务不能为空!!!');
      const task = {
        id: new Date().valueOf(),
        info: val,
        status: false
      }
      dispatch(addData(task));
      props.current.value = ''
    },
    //#endregion
    //#region 删除任务
    minusData(id) {
      dispatch(delData(id))
    },
    //#endregion
    //#region 改变任务状态
    changeChecked(id) {
      dispatch(fixChecked(id))
    },
    //#endregion
    //#region 切换任务
    changeDate(key) {
      dispatch(fixData(key))
    },
    //#endregion
    //#region 清除已完成任务
    clearChecked(){
      dispatch(clearData())
    } 
    //#endregion
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
