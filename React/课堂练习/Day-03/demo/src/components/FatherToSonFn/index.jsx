import React, { Fragment } from 'react';
import propTypes from 'prop-types';

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
const Son = (props)=>{
    return (
        <Fragment>
                {/* 子接收值 通过props的方式 */}
                <div>我爸爸给了我{props.ftoz}元</div>
        </Fragment>
    )
}

// 给组件设置默认值
Son.propTypes = {
    money: propTypes.number
}
Son.defaultProps = {
    // 如果设置的值类型不一致浏览器会报错，但会渲染出来
    ftoz: 0
}

export default Father;