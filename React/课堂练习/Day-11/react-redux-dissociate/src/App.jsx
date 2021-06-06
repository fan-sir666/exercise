import React from 'react';
import styled from 'styled-components'

// 1. 引入store
import store from './store'
// 4.1 引入action
import { addAction, minusAction } from "./store/action"
class App extends React.Component {
  // 2. 获取数据
  state = store.getState()
  //#region 4. ++ --
  handleAdd = ()=>{
    // 4.2 通过dispatch传递标识 来进行数据处理
    store.dispatch(addAction())
  }
  handleMinus = ()=>{
    store.dispatch(minusAction())
  }
  //#endregion

  componentDidMount(){
    // 监听状态变化并更新数据
    store.subscribe(()=>{
      this.setState({
        count:store.getState().count
      })
    })
  }
  render() {
    return (
      <Odiv>
        {/* 3.渲染 */}
        <h3>数字:{this.state.count}</h3>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
      </Odiv>
    )
  }
}

//#region 样式组件
const Odiv = styled.div`
margin: 100px auto 0;
width: 500px;
height: 500px;
border: 1px solid #ccc;
button {
  margin-right: 30px;
}
`
//#endregion
export default App;
