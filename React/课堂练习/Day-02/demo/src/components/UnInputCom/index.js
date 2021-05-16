import React from 'react';

// 非受控组件
class UnInputCom extends React.Component{
    constructor(){
        super();
        // 1. 创建ref对象
        this.txt = React.createRef();
    }
    getTxt = ()=>{
        // 3. 获取ref对象
        console.log(this.txt.current);
        console.log(this.txt.current.value);
    }

    render() {
        return (
            //  2. 绑定ref对象
            <input ref={this.txt} onBlur={this.getTxt}/>
        )
    }
}
export default UnInputCom;