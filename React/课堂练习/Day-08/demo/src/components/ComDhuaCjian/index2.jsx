import React, { Fragment } from "react"

// CSSTransition 的使用 过度动画

// 1. 装包  react-transition-group 
// 2. 在使用的组件导入
import { CSSTransition } from 'react-transition-group'
// 4. 将书写好的样式导入
import './index2.css'

class Home extends React.Component {
    // 初始状态默认不显示
    state = {
        flag: true
    }

    changeStateHide = () => {
        this.setState({
            flag: false
        })
    }

    render() {
        return (
            // 3. CSSTransition把需要动画的元素抱起来
            <Fragment>
                {/* appear 首屏加载触发动画 */}
                {/* unmountOnExit 动完离开完成后 移除动画结点 */}
                <CSSTransition in={this.state.flag} classNames="box" timeout={3000} appear unmountOnExit={true}>
                    <div></div>
                </CSSTransition>
                <button onClick={this.changeStateHide}>隐藏按钮</button>
            </Fragment>
        )
    }
}

export default Home;

