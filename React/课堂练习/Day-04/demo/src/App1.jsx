// 组件的生命周期：  1.挂载   
import React from 'react';

class App1 extends React.Component{

    constructor(){
        super();
        this.state = {
            num:1
        }
        console.log("1.1挂载阶段----初始化状态");
    }
    // Mount该钩子函数用来发送 网络请求 操作DOM
    componentDidMount(){
        console.log("1.3挂载阶段");
    }

    render(){
        console.log("1.2挂载阶段----渲染UI");
        return(
            <div>dasdsa</div>
        )
    }
    /* 结论: 执行顺序: constructor() --> render() --> componentDidMount
    
    */
}

export default App1;