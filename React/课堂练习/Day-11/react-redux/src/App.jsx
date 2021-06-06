import React from 'react';
import styled from 'styled-components'
// 1. 引入store
import store from './store';

class App extends React.Component {
  // 2. 获取store数据
  state = store.getState();

  //#region 4. 数字++ -- 
  handleAdd = () => {
    // 通过dispatch向store传对象标识,以便于处理数据
    store.dispatch({ type: "ADD_COUNT" })
  }
  handleMinus = () => {
    store.dispatch({ type: "MINUS_COUNT" })
  }
  //#endregion

  // 5. 更新数据
  componentDidMount() {
    // subscribe 该方法来监听状态的变化
    store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }
  
  render() {
    return (
      <Odiv>
        {/* 3.渲染初始数据 */}
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
