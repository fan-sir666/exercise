import React, { Fragment } from 'react'
import AppContainer from "./components/ComLayout/AppContainer"
// import Person from './components/DefaultProps/Person'
// import Moban from './components/ChildrenCom/Moban'
function App() {
  return (
    <Fragment>
      {/* 1. 体会组件布局 */}
      <AppContainer></AppContainer>

      {/* 2. 函数组件 props参数 及 默认值设置 */}
      {/* <Person msg={{ name: '张三', age: 28 }}></Person>
      <Person></Person> */}

      {/* 3. react 的children 插槽的功能 */}
      {/* <Moban>
        我是插槽1的内容
      </Moban>
      <Moban>
        <h1>标题</h1>
        <p>来了老弟,好嗨呦!!!</p>
      </Moban> */}
    </Fragment>
  )
}

export default App