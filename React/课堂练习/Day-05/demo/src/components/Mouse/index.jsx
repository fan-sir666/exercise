import React from 'react';
// import Img from '../image/cat.png'

// 封装我们需要共享的行为
class Mouse extends React.Component{
    // 初始化x,y坐标
    state = {
        x:0,
        y:0
    }

    componentDidMount(){
        window.addEventListener("mousemove",this.Fn)
    }

    Fn = (e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY,
        })
    }

    // render(){
    //     return(
    //         <img alt="" src={Img} style={{ position: 'absolute', top: this.state.y, left: this.state.x }} />
    //     )
    // }

    render(){
        // 将状态return出去 ,这样 使用这个共享行为 的 组件 ImgZb render里面的结构 就需要下面的代码实现
        // return this.props.xxx(this.state);
        // <Mouse xxx={(mouse)=>{
        //     return(
        //         <img alt="" src={Img} style={{position:'absolute', top:mouse.y,left:mouse.x}}></img>
        //     )
        // }}></Mouse>

        // 为了解决上面的问题 我们使用 children 将 this.state 传出去
        return this.props.children(this.state)
    }
    
}

export default Mouse;

