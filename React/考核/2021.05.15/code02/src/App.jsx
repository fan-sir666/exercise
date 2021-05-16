import React from 'react';
import './App.css'

class App extends React.Component {
    // 初始化数据
    state = {
        list: [
            { id: 1, name: '哇哈哈', ctime: new Date().toLocaleDateString() },
            { id: 2, name: '方便面', ctime: new Date().toLocaleDateString() },
        ],
        id: '',
        name: ''
    }

    // 改变状态
    changeVal = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // 添加:
    handleAdd = () => {
        const { id, name } = this.state;
        if (id.trim().length === 0 || name.trim().length === 0) return alert("编号和品牌名称不能为空");
        this.state.list.push({
            id: id,
            name: name,
            ctime: new Date().toLocaleDateString()
        })
        this.setState({
            list: this.state.list,
            id: '',
            name: ''
        })
    }

    // 删除
    handleDel = (id) => {
        // console.log(id);
        const newArr = this.state.list.filter(item => item.id !== id);
        this.setState({
            list: newArr
        })
    }

    render() {
        return (
            <div id="app">
                <div className="shopping-left">
                    <input type="text" name="id" placeholder="输入编号" value={this.state.id} onChange={this.changeVal} />
                    <input type="text" name="name" placeholder="输入名称" value={this.state.name} onChange={this.changeVal} />
                    <button onClick={this.handleAdd}>添加数据</button>
                    <hr />
                </div>
                {
                    this.state.list.length === 0 ? (<div>暂无数据</div>) : (
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>编号</th>
                                    <th>品牌名称</th>
                                    <th>创建时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.ctime}</td>
                                            <td><a href="#!" onClick={() => this.handleDel(item.id)}>删除</a></td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    )
                }
            </div>

        )
    }
}

export default App