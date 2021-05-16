import React from 'react';

class ThisCom extends React.Component{
    constructor(){
        super();
        this.state = {
            count:10
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this); // 类的一个普通函数里 this 打出来 undefined ,指向造成
        // 解决方式
        // 1. 我们使用箭头函数的形式 推荐使用
        // 2.  onClick={()=>this.handleClick()} 绑定事件时我们用这样的方式
        // 3. 通过bind方法来改变this的指向 构造器中改变
    }

    render(){
        return (
            // <div onClick={this.handleClick}>点我{this.state.count}</div>
            <div onClick={()=>this.handleClick()}>点我{this.state.count}</div>
        )
    }
}

export default ThisCom;