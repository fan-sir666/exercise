import React, { Fragment } from 'react';
import './index.css'
// 动画插件
import { CSSTransition } from 'react-transition-group'

class Animation extends React.Component {
    state = {
        flag: false
    }
    changeState = () => {
        this.setState({
            flag: true
        })
        setTimeout(() => {
            this.setState({
                flag: false
            })
        }, 1000)
    }
    render() {
        return (
            <Fragment>
                <h3>Animation页面</h3>
                <button onClick={this.changeState}>动画执行</button>
                <CSSTransition in={this.state.flag} classNames="animation" timeout={3000}>
                    <div className="animation-main"></div>
                </CSSTransition>
            </Fragment>
        )
    }
}
export default Animation