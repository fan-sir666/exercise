// 组件的生命周期：  2.更新  
// 执行时机: setState  
import React from 'react';

class App2 extends React.Component{

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
        console.log("组件更新了",this.state.num);
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
            <button onClick={this.changeState}>点击修改状态</button>
        )
    }
    /* 结论: 
        this.setState 不能在render渲染UI中使用
        通过事件触发 造成了组件的重新渲染  执行顺序: render() --> componentDidUpdate()
    */
}

export default App2;