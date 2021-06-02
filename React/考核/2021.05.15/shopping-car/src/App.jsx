import React from 'react';
import './App.css';
import Axios from 'axios'

//#region 导入相关组件
import CarList from './components/CarList/index.jsx'
import TotalPrice from './components/TotalPrice/index.jsx'
//#endregion

class App extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    // 获取购物车列表数据
    Axios.get("/data.json")
      .then((res) => {
        // console.log(res);
        this.setState({
          list: res.data
        })
      })
  }

  // 全选 反选
  changeAllChecked = (flag) => {
    this.setState({
      list: this.state.list.map(item => { item.checked = flag; return item })
    })
  }
  // 单选
  changeChecked = (list) => {
    this.setState({
      list: list
    })
  }
  // ++ 
  changeAdd = (id) => {
    this.state.list.forEach(item => {
      if (item.id === id) {
        item.count = item.count + 1
      }
    })
    // 更新数据
    this.setState({});
  }
  // --
  changeMinus = (id) => {
    this.state.list.forEach(item => {
      if (item.id === id) {
        item.count = item.count <= 0 ? 0 : item.count - 1
      }
    })
    // 更新数据
    this.setState({});
  }
  // 输入数量
  changeInput = (list) => {
    this.setState({
      list: list
    })
  }
  // 删除
  handleDel = (id) => {
    // console.log(id);
    const arrdel = this.state.list.filter(item => item.id !== id)
    this.setState({
      list: arrdel
    })
  }
  // 删除选中
  handleDelChecked = () => {
    // console.log('11111');
    const arrdel = this.state.list.filter(item => item.checked !== true)
    this.setState({
      list: arrdel
    })
  }
  // 清空购物车
  handleDelAll = ()=>{
    this.setState({
      list:[]
    })
  }
  render() {
    return (
      <div className="car">
        <CarList list={this.state.list} ztofStateAll={this.changeAllChecked} ztofState={this.changeChecked} ztofAdd={this.changeAdd} ztofMinus={this.changeMinus} ztofInput={this.changeInput} ztofDel={this.handleDel}></CarList>
        <TotalPrice list={this.state.list} ztofDelChecked={this.handleDelChecked} ztofDelAll={this.handleDelAll}></TotalPrice>
      </div>
    )
  }
}


export default App;
