import React, { Component, createRef } from 'react';
import "./App.css";
// 导入AppSon
import AppSon from "./AppSon";
import { connect } from 'react-redux'
import {addData} from '../store/action'
class App extends Component {
  constructor(){
    super();
    this.inputRef = createRef()
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>App--发送信息</h1>
          <div>
            <input type="text" placeholder="输入要发送的信息" ref={this.inputRef} />
            <button onClick={()=>this.props.addData(this.inputRef)}>Send</button>
          </div>
        </div>
        {/* AppSon */}
        <AppSon />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    //#region 
    addData(props){
      const val = props.current.value
      // console.log(val);
      if(val.trim().length <= 0) return alert('添加内容不能空!!!')
      const task = {
        id:new Date().valueOf(),
        info:val,
        status:false,
        ctime:new Date()
      }
      dispatch(addData(task))
      props.current.value = '';
    }
    //#endregion
  }
}
export default connect(null,mapDispatchToProps)(App);