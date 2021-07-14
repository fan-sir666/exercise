import { Fragment, useState, useEffect } from "react";
let flag = false;
function App() {
  //#region 初始化数据
  const [list, setList] = useState([
    { id: 1, name: "哈哈", ctime: "2021/7/14" },
    { id: 2, name: "水水", ctime: "2021/7/15" },
  ]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [serchVal, setSerchVal] = useState("");
  //#endregion
  //#region 数据的双向绑定
  const handleModel = (e) => {
    const obj = {
      id: () => setId(e.target.value),
      name: () => setName(e.target.value),
      key: () => setSerchVal(e.target.value),
    };
    obj[e.target.name]();
  };
  //#endregion
  //#region 数据操作的信息提示
  useEffect(() => {
    flag ? alert("操作成功!") : (flag = true);
  }, [list]);
  //#endregion
  //#region 添加
  const handleAdd = () => {
    // console.log(11111);
    if (id.trim().length === 0 || name.trim().length === 0)
      return alert("输入框内容不能为空!!!");
    const newList = [
      ...list,
      { id: id, name: name, ctime: new Date().toLocaleDateString() },
    ];
    setList(newList);
    setId("");
    setName("");
  };
  //#endregion
  //#region 删除
  const handleDel = (id) => {
    // console.log(id);
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  //#endregion
  //#region 搜索
  const handleSerch = () => {
    return list.filter((item) => item.name.includes(serchVal));
  };
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
              <input
                type="text"
                className="form-control"
                name="id"
                value={id}
                onChange={(e) => handleModel(e)}
              />
            </div>
            <div className="input-group">
              <div className="input-group-addon">品牌名称</div>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => handleModel(e)}
              />
            </div>
            <div className="input-group">
              <button className="btn btn-primary" onClick={() => handleAdd()}>
                添加
              </button>
            </div>
            <div className="input-group pull-right">
              <div className="input-group-addon">按名称搜索</div>
              <input
                type="text"
                className="form-control"
                name="key"
                value={serchVal}
                onChange={(e) => handleModel(e)}
              />
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
            {handleSerch().map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.ctime}</td>
                <td>
                  <a href="!#" onClick={() => handleDel(item.id)}>
                    删除
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
export default App;
