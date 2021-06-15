import React, { createRef } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getData,addData,delData,fixStatus,fixTask,clearData } from './store/action'
class App extends React.Component {
  constructor(){
    super();
    this.inputRef = createRef();
  }
  //#region 切换任务的渲染列表
  taskList = () => {
    if (this.props.activeKey === 'undone') {
      return this.props.list.filter(item=>!item.status);
    }else if (this.props.activeKey === 'done') {
      return this.props.list.filter(item=>item.status);
    }else {
      return this.props.list
    }
  }
  //#endregion
  // 获取首次渲染数据
  componentDidMount() {
    this.props.handleGetData()
  }
  render() {
    return (
      <div className="App todo" >
        {/* 输入框及搜索按钮 */}
        < div className="todo-header" >
          <input type="text" placeholder="请输入任务" ref={this.inputRef} />
          <button onClick={()=>this.props.handleAdd(this.inputRef)}>添加事项</button>
        </div>
        {/* 列表 */}
        < ul className="todo-main" >
          {
            this.taskList().map(item => (
              <li key={item.id}>
                <input type="checkbox" checked={item.status} onChange={()=>this.props.handleChecked(item.id)} /> <span>{item.info}</span>
                <a href="#!" onClick={()=>this.props.handleDel(item.id)}>删除</a>
              </li>
            ))
          }
        </ul >
        {/* 底部菜单 */}
        < div className="todo-footer" >
          <p>共有任务{this.taskList().length}条</p>
          <div className="todo-footer-button">
            <button onClick={()=>this.props.handleTask('all')} className={this.props.activeKey === 'all' ? 'primary':''}>全&nbsp;&nbsp;部</button>
            <button onClick={()=>this.props.handleTask('undone')} className={this.props.activeKey === 'undone' ? 'primary':''}>未完成</button>
            <button onClick={()=>this.props.handleTask('done')} className={this.props.activeKey === 'done' ? 'primary':''}>已完成</button>
          </div>
          <a href="#!" onClick={()=>this.props.handleClear()} >清除已完成</a>
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
    handleGetData() {
      dispatch(getData())
    },
    //#endregion
    //#region 添加数据
    handleAdd(props){
      const val = props.current.value;
      // console.log(val);
      if(val.trim().length <= 0) return alert('添加任务不能为空!!!')
      const task = {
        id: new Date().valueOf(),
        info: val,
        status: false
      }
      dispatch(addData(task));
      props.current.value = ''
    },
    //#endregion
    //#region 删除数据
    handleDel(id){
      dispatch(delData(id))
    },
    //#endregion
    //#region 修改状态
    handleChecked(id){
      dispatch(fixStatus(id))
    },
    //#endregion
    //#region 切换任务
    handleTask(key){
      dispatch(fixTask(key))
    },
    //#endregion
    //#region 清除已完成任务
    handleClear(){
      dispatch(clearData())
    }
    //#endregion
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
