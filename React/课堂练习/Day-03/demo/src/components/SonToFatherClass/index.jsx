import React,{Fragment} from 'react';

// 父组件
class Father extends React.Component{
    state = {
        msg:""
    }

    jieShou = (msg)=>{
        this.setState({
            msg : msg
        })
    }
    render() {
        return (
            <Fragment>
                {/* 父组件通过自定义函数接收值  */}
                <Son ztof={this.jieShou}></Son>
                <p>儿子告诉{this.state.msg}</p>
            </Fragment>
        )
    }
}

// 子组件
class Son extends React.Component {
    state = {
        msg:"我今天学习了很多知识"
    }

    zchuanf= ()=>{
        this.props.ztof(this.state.msg);
    }
    render() {
        return(
            <Fragment>
                {/* 子通过触发父组件定义的方法传值 */}
                {/* 方式一 */}
                {/* <button onClick={()=> this.props.ztof(this.state.msg)}>点击传值</button> */}
                {/* 方式二 */}
                <button onClick={this.zchuanf}>点击传值</button>
            </Fragment>
        )
    }
}

export default Father;