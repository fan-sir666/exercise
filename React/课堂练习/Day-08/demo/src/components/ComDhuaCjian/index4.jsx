import React, { Fragment } from "react"

// CSSTransition 的使用 过度动画

// 2. 在使用的组件导入
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './index4.css'

class Home extends React.Component {
    // 初始状态默认不显示
    state = {
        flag: true
    }

    // 改变状态
    changeState = () => {
        setInterval(() => {
            this.setState(
                {
                    flag: !this.state.flag
                }
            )
        },6000)
    }

    render() {
        return (
            <Fragment>
                <SwitchTransition>
                    <CSSTransition in={this.state.flag} classNames="box" timeout={3000}>
                        <div>{this.state.flag ? '来了老弟' : '好嗨呦!'}</div>
                    </CSSTransition>
                </SwitchTransition>
                <button onClick={this.changeState}>按钮</button>
            </Fragment>
        )
    }
}

export default Home;

