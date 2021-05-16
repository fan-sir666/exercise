import React, { Fragment } from 'react';

// 数据的双向绑定
class InputCom extends React.Component{
    // 初始化数据
    state = {
        val:""
    }

    handleChange = (e)=>{
        // 修改状态
        this.setState({
            val:e.target.value
        })
    }
    handleGet = ()=>{
        console.log(this.state.val);
    }

    render(){
        return (
            <Fragment>
                <input value={this.state.val} onChange={this.handleChange}/>
                {/* 点击查看输入结果 */}
                <button onClick={this.handleGet}>查看{'数据双向绑定' + this.state.val}</button>
            </Fragment>
        )
    }
}

export default InputCom;