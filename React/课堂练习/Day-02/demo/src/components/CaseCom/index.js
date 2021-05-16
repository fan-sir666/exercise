import React, { Fragment } from 'react';

class CaseCom extends React.Component{
    // 1. 初始化数据
    state = {
        // 评论列表
        list: [
          { id: 1, name: 'jack', content: 'rose, you j, i j' },
          { id: 2, name: 'rose', content: 'jack, 风太大听不见' },
          { id: 3, name: 'tom', content: '????, 你们扔垃圾吗？' }
        ],
        // 评论人
        name: "",
        // 评论内容
        content: ""
    }

    // 3. 修改状态 
    handleChangeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleChangeContent=(e)=>{
        this.setState({
            content:e.target.value
        })
    }

    // 4. 添加评论
    handleAdd=()=>{
        this.setState({
            list:[...this.state.list, { id: this.state.list.length + 1, name: this.state.name, content: this.state.content }],
            // 清空
            name:"",
            content: ""
        })
    }

    // 2. 渲染结构
    render(){
        return (
            <Fragment>
                {/* 输入发表区域 */}
                <input placeholder="评论人" value={this.state.name} onChange={this.handleChangeName}/>
                <textarea placeholder="评论内容" value = {this.state.content} onChange={this.handleChangeContent}></textarea>
                <button onClick={this.handleAdd}>发表</button>
                {/* 展示评论区域 */}
                <ul>
                    {
                        this.state.list.map(item => (
                            <li key={item.id}>
                                <h3>{item.name}</h3>
                                <p>{item.content}</p>
                            </li>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }
}
export default CaseCom;