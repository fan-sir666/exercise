import React, { Fragment } from 'react';

class CaseDemo extends React.Component {
    // 1. 初始化数据
    state = {
        brandList: [
            { id: 1, name: '奔驰', ctime: '2020/9/23' },
            { id: 2, name: '宝马', ctime: '2020/9/21' },
            { id: 3, name: '长安奔奔', ctime: '2014/6/23' },
            { id: 4, name: '千里马', ctime: '2020/5/3' }
        ],
        // 编号
        id: '',
        // 品牌名称
        name: '',
        // 搜索关键字
        searchVal:''
    }

    // 3. 数据双向绑定
    handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //#region 4. 添加
    handleAdd = () => {
        // 4.1 获取输入框的值
        const { id, name } = this.state;
        // 4.2 非空校验
        if (id.trim().length === 0 || name.trim().length === 0) return alert("编号和品牌名称不能为空!!!");
        // 4.3 修改状态
        this.setState({
            // 新数据替换旧数据 实现添加
            brandList: [...this.state.brandList, { id: id, name: name, ctime: new Date().toLocaleDateString() }],
            // 清空输入框
            id: '',
            // 品牌名称
            name: ''
        })

        // 原来的思路 向数据中添加一条数据，但是在react中还是需要使用setState 来修改现有状态
        // this.state.brandList.push({ id: id, name: name, ctime: new Date().toLocaleDateString() });
        // this.setState({
        //     brandList:this.state.brandList,
        //     id: '',
        //     name: ''
        // })
    }
    //#endregion

    //#region 5.删除
    handleDel = (id)=>{
        // console.log(id);
        // 通过filter 变量返回一个符合条件的数组
        const newArr = this.state.brandList.filter(item=>item.id!==id);
        // 修改状态
        this.setState({
            brandList:newArr
        })
    }
    //#endregion

    //#region 6.搜索 相当于做一个计算属性的功能
    handleSearch = ()=>{
        // console.log(11111);
        // 遍历数组每一项，每一项的name是否包含搜索关键字
        return this.state.brandList.filter(item=>item.name.includes(this.state.searchVal))
    }
    //#endregion



    // 2. 渲染结构
    render() {
        return (
            <Fragment>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">添加品牌</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group form-inline">
                            <div className="input-group">
                                <div className="input-group-addon">编号</div>
                                <input type="text" className="form-control" name="id" value={this.state.id} onChange={this.handleChange} />
                            </div>
                            <div className="input-group">
                                <div className="input-group-addon">品牌名称</div>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="input-group">
                                <button className="btn btn-primary" onClick={this.handleAdd}>添加</button>
                            </div>
                            <div className="input-group pull-right">
                                <div className="input-group-addon">按名称搜索</div>
                                <input type="text" className="form-control" name="searchVal" value={this.state.searchVal} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>品牌名称</th>
                                <th>添加时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.handleSearch().map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.ctime}</td>
                                        <td>
                                            <button onClick={()=>this.handleDel(item.id)}>删除</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}
export default CaseDemo