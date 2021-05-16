import React,{Fragment} from 'react';
import propTypes from "prop-types"

// 父组件
class Father extends React.Component{
    state = {
        money:100
    }
    render() {
        return (
            <Fragment>
                {/* 父传值 通过属性的方式 */}
                <Son ftoz={this.state.money}></Son>
                {/* 不传的情况下使用我们设置的默认值 */}
                {/* <Son></Son> */}
            </Fragment>
        )
    }
}

// 子组件
class Son extends React.Component {
    // 设置默认值
    static propTypes = {
        money: propTypes.number
    }
    static defaultProps = {
        ftoz:0
    }
    render() {
        return(
            <Fragment>
                {/* 子接收值 通过this.props的方式 */}
                <div>我爸爸给了我{this.props.ftoz}元</div>
            </Fragment>
        )
    }
}

export default Father;