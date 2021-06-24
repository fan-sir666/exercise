import React, { Fragment } from 'react';

function CartList(props) {
    //#region 输入值
    const handleChange = (id, e) => {
        // console.log(id, e.target.value);
        let val = +e.target.value
        if (val < 0 || isNaN(val)) {
            val = 0
        }
        props.zcfChange(id, val)
    }
    //#endregion
    return (
        <Fragment>
            <div>
                {
                    props.fczlist.map(item => (
                        <div className="item" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="name">{item.name}</div>
                            <div className="change">
                                <a href="#!" onClick={() => props.zcfminus(item.id)}>－</a>
                                <input type="text" className="num" value={item.num} onChange={(e) => handleChange(item.id, e)} />
                                <a href="#!" onClick={() => props.zcfadd(item.id)}>＋</a>
                            </div>
                            <div className="del" onClick={() => props.zcfdel(item.id)}>×</div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default CartList;