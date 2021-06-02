import React from 'react'

class CarList extends React.Component {
    state = {
        checkedAll: false,
    }
    // 全选 反选
    handleAllChecked = () => {
        this.setState({
            checkedAll: !this.state.checkedAll
        }, () => {
            this.props.ztofStateAll(this.state.checkedAll)
        })
    }
    // 单选
    handleChecked = (id) => {
        // 1. 假设单选全部选中了
        let isAll = true;
        // 2. 遍历传过来的数组
        this.props.list.map(item => {
            // 2.1. id相等的情况下 选中状态取反
            if (item.id === id) {
                item.checked = !item.checked;
            }
            // 2.2.一旦有一个对象未选中 false 取反满足条件走进判断 
            //    把我们假设的状态变为 false
            if (!item.checked) { isAll = false };
            // 2.3返回对象
            return item;
        })
        // 3. 更新全部选中的状态
        this.setState({
            checkedAll: isAll
        })
        // 4. 处理好的数据传给父组件
        this.props.ztofState(this.props.list);
    }
    // ++
    handleAdd = (id) => {
        this.props.ztofAdd(id)
    }
    // -- 
    handleMinus= (id)=>{
        this.props.ztofMinus(id)
    }
    // 输入数量
    handleInput = (id,e)=>{
        let val = e.target.value*1;
        if (val < 0 || isNaN(val)) {
            val = 0;
        }
        this.props.list.some(item => {
            if(item.id === id){
                item.count = val;
                return true
            }
            return false;
        })
        this.props.ztofInput(this.props.list)
    }
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" id="all" checked={this.state.checkedAll} onChange={this.handleAllChecked} />全选
                        </th>
                        <th>
                            商品
                        </th>
                        <th>
                            单价
                        </th>
                        <th>
                            商品数量
                        </th>
                        <th>
                            小计
                        </th>
                        <th>
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.list.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <input type="checkbox" checked={item.checked} onChange={() => this.handleChecked(item.id)} />
                                </td>
                                <td>
                                    <img src={item.src} alt="" />
                                    <p>{item.pName}</p>
                                </td>
                                <td>
                                    {item.price}￥
                        </td>
                                <td>
                                    <div className="count-c clearfix">
                                        <a href="#!" className="reduce" onClick={()=>this.handleMinus(item.id)}>-</a>
                                        <input type="text"  value={item.count} onChange={(e)=>this.handleInput(item.id,e)}/>
                                        <a href="#!" className="add" onClick={()=>this.handleAdd(item.id)}>+</a>
                                    </div>
                                </td>
                                <td>
                                    {item.count * item.price}￥
                        </td>
                                <td>
                                    <a href="#!" className="del" onClick={()=>this.props.ztofDel(item.id)}>删除</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}

export default CarList;