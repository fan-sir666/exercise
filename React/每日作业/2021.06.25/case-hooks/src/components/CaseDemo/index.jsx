import React, { Fragment, useState } from 'react';

function App() {
    //#region 初始化数据
    const [list,setList] = useState(
        [
            { id: 1, name: '奔驰', ctime: '2020/9/23' },
            { id: 2, name: '宝马', ctime: '2020/9/21' },
            { id: 3, name: '长安奔奔', ctime: '2014/6/23' },
            { id: 4, name: '千里马', ctime: '2020/5/3' }
        ]
    )
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [serchVal, setSerchVal] = useState('')
    //#endregion
    //#region 双向绑定
    const handleModel = (e) => {
        // switch (e.target.name) {
        //     case 'id':
        //         setId(e.target.value)
        //         break;
        //     case 'name':
        //         setName(e.target.value)
        //         break;
        //     case 'key':
        //         setSerchVal(e.target.value)
        //         break;
        //     default:
        //         throw new Error('出错了!')
        // }
        // 优化switch
        const obj = {
            id:()=>setId(e.target.value),
            name:()=>setName(e.target.value),
            key:()=>setSerchVal(e.target.value),
        }
        obj[e.target.name]()
    }
    //#endregion
    //#region 添加
    const handleAdd = ()=>{
        if (id.trim().length === 0 || name.trim().length === 0) return alert("编号和品牌名称不能为空!!!");
        const newList = [...list,{id:id,name:name,ctime:new Date().toLocaleDateString()}]
        setList(newList)
    }
    //#endregion
    //#region 删除
    const handleDel = (id)=>{
        const newList = list.filter(item=>item.id !== id)
        setList(newList)
    }
    //#endregion
    //#region 搜索
    const handleSearch =()=>{
        return list.filter(item=>item.name.includes(serchVal))
    } 
    //#endregion
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
                            <input type="text" className="form-control" name="id" value={id} onChange={(e) => handleModel(e)} />
                        </div>
                        <div className="input-group">
                            <div className="input-group-addon">品牌名称</div>
                            <input type="text" className="form-control" name="name" value={name} onChange={(e) => handleModel(e)} />
                        </div>
                        <div className="input-group">
                            <button className="btn btn-primary" onClick={handleAdd}>添加</button>
                        </div>
                        <div className="input-group pull-right">
                            <div className="input-group-addon">按名称搜索</div>
                            <input type="text" className="form-control" name='key' value={serchVal} onChange={(e) => handleModel(e)} />
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
                            handleSearch().map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.ctime}</td>
                                    <td>
                                        <a href="!#" onClick={()=>handleDel(item.id)}>删除</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment >
    )
}
export default App