import React from 'react'

import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'

class Animation extends React.Component {
    state = {
        flag:false
    }
    changeState = ()=>{
        this.setState({
            flag:true
        })
        setTimeout(()=>{
            this.setState({
                flag:false
            })
        },1000)
    }
    render() {
        return (
            <DivBox>
                <h3>动画页面</h3>
                <button onClick={this.changeState}>动画执行</button>
                {/* 动画盒子 */}
                <CSSTransition in={this.state.flag} classNames='donghua' timeout={3000}>
                    <div className='donghua-box'></div>
                </CSSTransition>
            </DivBox>
        )
    }
}


//#region 样式组件
const DivBox = styled.div`
/* 按钮 */
button {
    margin: 10px 0 30px;
}

/* 动画 */
.donghua-box {
    width: 500px;
    height: 500px;
    background-color: #000;
    border-radius: 10px;
    opacity: 0;
}
.donghua-enter {
    transform: translateX(200px);
    opacity: 0;
}
.donghua-enter-active {
    transform: translateX(0px);
    opacity: 1;
    transition: all 1s linear;
}
.donghua-enter-done {
    transform: translateX(0px);
    opacity: 1;
}

.donghua-exit {
    transform: translateX(0px);
    opacity: 1;
}
.donghua-exit-active {
    transform: translateX(200px);
    opacity: 0;
    transition: all 1s linear;
}
.donghua-exit-done {
    transform: translateX(200px);
    opacity: 0;
}
`
//#endregion

export default Animation;