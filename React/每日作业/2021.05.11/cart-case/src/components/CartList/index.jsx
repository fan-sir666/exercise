import React, { Fragment } from 'react';

class CartList extends React.Component {
    //#region 输入值
    handleChange = (id, e) => {
        // console.log(id, e.target.value);
        let val = +e.target.value
        if(val < 0 || isNaN(val)){
            val = 0
        }
        this.props.zcfChange(id,val)
    }
    //#endregion
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
                                    <a href="#!" onClick={()=>this.props.zcfminus(item.id)}>－</a>
                                    <input type="text" className="num" value={item.num} onChange={(e) => this.handleChange(item.id, e)} />
                                    <a href="#!" onClick={()=>this.props.zcfadd(item.id)}>＋</a>
                                </div>
                                <div className="del" onClick={() => this.props.zcfdel(item.id)}>×</div>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

export default CartList;