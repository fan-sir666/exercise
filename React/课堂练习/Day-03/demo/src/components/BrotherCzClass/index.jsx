import React, { Fragment } from 'react';
/* 
 在react中所谓的兄弟之间传值,实际是 一方先给父组件，然后另一方在从父组件拿，这样达到一个传值的效果。
*/

// 父组件
class Father extends React.Component {
    state = {
        // 接收到要给兄弟的值
        val:0
    }
    jieShou = (val)=>{
        // console.log(val);
        this.setState({
            val:val
        })
    }
    render() {
        return (
            <Fragment>
                {/* 哥哥 */}
                <ElderBrother ztof={this.jieShou}></ElderBrother>
                {/* 弟弟 */}
                <YoungerBrother ftoz={this.state.val}></YoungerBrother>
            </Fragment>
        )
    }
}

// 兄弟组件哥哥
class ElderBrother extends React.Component {
    state = {
        money: 100
    }
    render() {
        return (
            <button onClick={()=>this.props.ztof(this.state.money)}>点击给弟弟值</button>
        )
    }
}
// 兄弟组件弟弟
class YoungerBrother extends React.Component{
    render(){
        return(
            <p>我哥哥借给了我{this.props.ftoz}元,我会努力早日归还!!</p>
        )
    }
}

export default Father;