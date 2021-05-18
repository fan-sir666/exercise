import React, { Fragment } from "react"
import styled from "styled-components"

// 原生动画

// 2. 创建样式组件
const Odiv = styled.div`
width:${props=>props.width};
height:${props=>props.height};
background-color: yellowgreen;
opacity:${props=>props.opacity};
text-align: center;
line-height:${props=>props.height};
transition:all 3s;
`

class Home extends React.Component {
    state = {
        // 1. 定义动画初始值
        width: '0px',
        height: '0px',
        opacity:0
    }

    // 修改状态
    changeState = ()=>{
        this.setState({
            width: '200px',
            height: '200px',
            opacity:1
        })
    }
    render() {
        return (
            <Fragment>
                <Odiv {...this.state}>原生动画</Odiv>
                <button onClick={this.changeState}>点击改变状态</button>
            </Fragment>
        )
    }
}

export default Home;