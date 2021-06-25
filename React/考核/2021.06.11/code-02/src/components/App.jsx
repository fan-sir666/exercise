import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getNum} from '../store/action'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={()=>this.props.getData()}>获取随机码</button>
        <h1 className="num">{this.props.num}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    num :state.num
  }
}
const mapDisPatchToProps = (dispatch)=>{
  return {
    getData(){
      dispatch(getNum)
    }
  }
}
export default connect(mapStateToProps,mapDisPatchToProps)(App);