import React from 'react';


// 父组件
class Father extends React.Component {
    state = {
        count: 0
    }

    changeState = () => {
        this.setState({
            count: 1
        })
    }

    render() {
        return (
            <div>
                <h3>我是父组件Father</h3>
                <button onClick={this.changeState}>点击改变状态</button>
                <Son count={this.state.count}></Son>
            </div>
        )
    }
}

// 子组件
class Son extends React.Component {
    render() {
        return (
            <div>
                <h3>我是子组件Son</h3>
                <p>{this.props.count}</p>
                <Home></Home>
            </div>
        )
    }
}

// const Home = (props) => {
//     console.log("Home组件更新");
//     return (
//         <div>
//             <h3>我是Home组件</h3>
//         </div>
//     )
// }

// 组件更新机制   父元素状态改变  Home组件不会造成重新渲染

// 通过React.memo()高阶函数,返回一个优化后的组件

const Home = React.memo(() => {
    console.log("Home组件更新");
    return (
        <div>
            <h3>我是Home组件</h3>
        </div>
    )
})

export default Father;
