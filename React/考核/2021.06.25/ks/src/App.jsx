import { useEffect, useRef, useState } from 'react';
import './App.css';

let flag = false
function App() {
  //#region 初始状态
  const [list, setList] = useState([
    {
      id: 1,
      info: '睡觉',
      status: false
    },
    {
      id: 2,
      info: '吃饭',
      status: true
    },
    {
      id: 3,
      info: '打豆豆',
      status: true
    }
  ])
  const inputRef = useRef()
  //#endregion
  //#region 添加
  const handleAdd = () => {
    if (inputRef.current.value.trim().length <= 0) return alert('输入内容不能为空')
    const task = {
      id: new Date().valueOf(),
      info: inputRef.current.value,
      status: false
    }
    const newList = [...list, task]
    setList(newList)
    inputRef.current.value = ''
  }
  //#endregion
  //#region 删除
  const handleDel = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }
  //#endregion
  //#region 修改
  const handleState = (id) => {
    const newList = list.map(item => {
      if (item.id === id) {
        return { ...item, status: !item.status }
      }
      return item
    })
    setList(newList)
  }
  //#endregion
  useEffect(() => {
   if(!flag){
    flag = true
   }else {
     alert('操作成功！')
   }
  }, [list])
  return (
    <div className="Todos">
      <h3>Todos</h3>
      <ul>
        {
          list.map(item => (
            <li key={item.id}>
              <span className={item.status === false ? 'active' : ''}>{item.info}</span>
              <button className='btn' onClick={() => handleState(item.id)}>完成</button>
              <button onClick={() => handleDel(item.id)}>删除</button>
            </li>
          ))
        }
      </ul>
      <input type="text" placeholder='add todo...' ref={inputRef} /> <button onClick={handleAdd}>添加</button>
    </div>
  )
}

export default App;
