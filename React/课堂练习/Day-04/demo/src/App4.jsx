// 组件的生命周期：  2.更新  
// 执行时机: 组件接收新的props
import React from 'react';

class App4Son extends React.Component{
    componentDidUpdate(){
        console.log("传过来的状态改变了",this.props.fczval);
    }
    render(){
        console.log("组件更新了老弟");
        return(
            <div>我是子组件，{this.props.fczval}</div>
        )
    }
}

class App4 extends React.Component{

    constructor(){
        super();
        this.state = {
            num:0
        }
        console.log("1.1挂载阶段----初始化状态");
    }

    componentDidMount(){
        console.log("1.3挂载阶段");
    }

    componentDidUpdate(){
        console.log("组件跟新了",this.state.num);
    }
    
    changeState=()=>{
        // 修改状态 会造成组件的重新渲染
        this.setState({
            num:this.state.num + 1
        })
    }

    render(){
        console.log("1.2挂载阶段----渲染UI" ,this.state.num);
        return(
            <div>
                 <button onClick={this.changeState}>点击修改状态</button>
                 <App4Son fczval={this.state.num}></App4Son>
            </div>
        )
    }
    /* 结论: 
        this.setState 不能在render渲染UI中使用
        通过事件触发 造成了 父组件状态的改变 也造成了 子组件的重新渲染render执行了两次
        执行顺序  初始状态1.1 -》父组件render执行 -》子组件的render执行 -》父组件的挂载钩子函数执行
                事件触发之后   执行父组件的render -》子组件的render执行 -》执行子组件的更新钩子函数 -》执行父组件的更新钩子函数
    */
}

export default App4;