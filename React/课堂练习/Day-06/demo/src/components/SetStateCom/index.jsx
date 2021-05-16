import React from 'react';

class SetStateCom extends React.Component {
    state = {
        count: 0
    }

    clickFn = () => {
        //#region 
        // console.log('改变状态前'+this.state.count);
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log('改变状态'+this.state.count);
        // this.setState({
        //     count: this.state.count + 2
        // })
        // console.log('改变状态'+this.state.count);
        // this.setState({
        //     count: this.state.count + 3
        // })
        // console.log('改变状态后'+this.state.count);

        // 结论: setState 异步更新数据  多次调用 最后一次负责渲染 前面的都被覆盖
        //#endregion

        // setState 的第二个参数回调函数 会立即执行
        //  this.setState({
        //     count: this.state.count + 1
        // },()=>{
        //     console.log('我的值变了'+ this.state.count+"次");
        // })
    }

    // componentDidMount(){
    //     // 推荐语法: 箭头函数的形式  state最新状态  props
    //     this.setState((state, props)=>{
    //         console.log(state);
    //         console.log(props);
    //     })
    // }

    // componentDidUpdate(){
    //     this.setState((state, props)=>{
    //         console.log(state);
    //         console.log(props);
    //     })
    // }

    render() {
        console.log('渲染');
        return (
            <div>
                <div>我是count的值:{this.state.count}</div>
                <button onClick={this.clickFn}>点击值变化</button>
            </div>
        )
    }
}

export default SetStateCom;