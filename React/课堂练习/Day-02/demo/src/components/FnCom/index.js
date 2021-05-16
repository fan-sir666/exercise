import React from 'react';

// 函数组件也称为无状态组件

function Fn() {

    const handleClick = ()=>{
        console.log("来了老弟,点击事件成功");
    }
    
    return (
        <button onClick={handleClick}>我是函数组件</button>
    )
}

export default Fn;