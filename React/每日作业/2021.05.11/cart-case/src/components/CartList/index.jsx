import React, { Fragment } from 'react';

class CartList extends React.Component {
    // constructor(){
    //    super();
    //    this.txt = React.createRef();
    // }

    //#region 输入数量
    // handleChangeVal = (id) => {
    //     // console.log(id);
    //     // console.dir(this.txt.current);
    //     // let val = parseInt(this.txt.current.value);
    //     // console.log(val);
    //     // // 处理非数字 负数的情况
    //     // if(isNaN(val) || val < 0) {
    //     //     console.log(11111);
    //     //     val = 0;
    //     // }
    //     // // console.log(id,val);
    //     // this.props.zcfChange({
    //     //     type:'change',
    //     //     id: id,
    //     //     num: val < 0 ? 0 : val
    //     // })
    // }
    //#endregion
    handleChangeVal = (id,e) => {
        let val = +e.target.value;
        console.log(id+'-----------'+val);
        // console.log(val);
        // 处理非数字 负数的情况
        if(isNaN(val) || val < 0) {
            val = 0;
        }
        // console.log(id,val);
        this.props.zcfChange({
            type:'change',
            id: id,
            num: val < 0 ? 0 : val
        })
    }
    
    render() {
        return (
            <Fragment>
                <div>
                    {
                        this.props.fczlist.map(item => (
                            <div className="item" key={item.id}>
                                <img src={item.img} alt="" />
                                <div className="name">{item.name}</div>
                                <div className="change">
                                    <a href="#!">－</a>
                                    <input type="text" className="num" value={item.num} onChange={(e) => this.handleChangeVal(item.id,e)}/>
                                    {/* <input type="text" className="num" value={item.num} ref={this.txt} onBlur={this.handleChangeVal.bind(this,item.id)} /> */}
                                    <a href="#!">＋</a>
                                </div>
                                <div className="del" onClick={()=> this.props.zcfdel(item.id)}>×</div>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

export default CartList;