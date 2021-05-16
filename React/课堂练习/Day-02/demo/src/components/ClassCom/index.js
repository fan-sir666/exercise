import React from 'react';

class Demo extends React.Component{
    // 初始化状态
    // constructor() {
    //     super();
    //     this.state = {
    //         num:1
    //     }
    // }

    // 初始化状态简化写法
    state = {
        num:1
    }

    numChange = (e)=>{
        
        // 获取事件源
        console.log(e.target);
        // 状态改变
        this.setState({
            num:this.state.num + 1
        })
    }

    render(){
        return (
            <div onClick={this.numChange}>点我数字变化{this.state.num}</div>
        )
    }
}

export default Demo