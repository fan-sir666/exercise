import React from 'react';

/* 
    问题: App组件状态改变会造成所有组件都会重新渲染

    解决: 谁受影响就对谁使用 钩子函数 shouldComponentUpdate(nextProps, nextState) 通过返回值决定该组件是否重新渲染
                                true 表示重新渲染，false 表示不重新渲染

    其他优化: 减轻state,不用做渲染的数据不要放在 state 中; 纯组件解决了我们认为考虑谁会受到影响的问题
*/

class App extends React.Component {
    state = {
        num: 0
    }

    changeState = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        console.log('我App被渲染了');
        return (
            <div>
                <div>我是App组件</div>
                <button onClick={this.changeState}>点击改变App状态</button>
                <AppSon></AppSon>
                <AppNer></AppNer>
            </div>
        )
    }
}

// App组件的儿子
class AppSon extends React.Component {
    state = {
        num: 0
    }

    changeState = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        console.log('我AppSon被渲染了');
        return (
            <div>
                <div>我是App组件的儿子</div>
                <button onClick={this.changeState}>点击改变AppSon状态</button>
                <AppSzi num={this.state.num}></AppSzi>
            </div>
        )
    }
}
// App组件的女儿
class AppNer extends React.Component {
    render() {
        console.log('我AppNer被渲染了');
        return (
            <div>我是App组件的女儿</div>
        )
    }
}

// App组件的孙子
class AppSzi extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.num);
        console.log(this.props.num);
        // 如果props变化了 state变化了
        return nextProps.num !== this.props.num
    }
    render() {
        console.log('我AppSzi被渲染了');
        return (
            <div>我是App组件的孙子</div>
        )
    }
}
export default App;