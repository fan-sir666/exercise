import { Fragment, useState } from "react";

function App() {
  /* 
    useState ：用来定义state变量 
            参数:state的初始值
            返回值:当前state以及更新state的函数
      const [state,setState] = useState(初始值)
  */

  const [nameState] = useState('半瓢水');
  const [ageState, setAgeState] = useState(19);
  const [hobbyState] = useState(['抽烟', '喝酒', '烫头']);
  const [wifeState] = useState({
    name: '凤姐',
    age: '18'
  })

  const addAge = () => {
    // 修改数据setAgeState也是异步的
    setAgeState(ageState + 1)


    // setAgeState((newVal)=> newVal + 10)
    // setAgeState((newVal)=> newVal + 20)
    // setAgeState((newVal)=> newVal + 30)
    // 直接输出79  newVal每次都依赖之前修改过的值
  }
  return (
    <Fragment>
      <h2>我叫：{nameState},今年{ageState}</h2>
      <div>爱好:{hobbyState.map((item, index) => (<span key={index}>{item}</span>))}</div>
      <ul>
        {/* 遍历对象数据   使用Object.keys(要遍历的对象名称) 将对象转为数组 在使用map方法 */}
        {Object.keys(wifeState).map((item, index) => <li key={index}>{wifeState[item]}</li>)}
      </ul>
      <button onClick={() => addAge()}>点击我长大了</button>
    </Fragment>
  )
}

export default App;
