import React from 'react';

class LeiFnCzCom extends React.Component{
    state = {
        list:[
            {id:1,name:"张三",age:18},
            {id:2,name:"李四",age:20},
            {id:3,name:"王五",age:22}
        ]
    }

    // 需求:点击删除对应项
    delItem = (id)=>{
        const arr = this.state.list.filter(item => item.id !== id)
        this.setState({
            list:arr
        })
    }

    render() {
        return (
            <ul>
                {
                    this.state.list.map(item =>(
                        // <li key={item.id}>{'我叫'+item.name+',今年'+item.age+'岁了'} <button onClick={this.delItem.bind(this,item.id)}>点击删除</button></li>
                        <li key={item.id}>{'我叫'+item.name+',今年'+item.age+'岁了'} <button onClick={()=>this.delItem(item.id)}>点击删除</button></li>
                    ))
                }
            </ul>
        )
    }
}

export default LeiFnCzCom;