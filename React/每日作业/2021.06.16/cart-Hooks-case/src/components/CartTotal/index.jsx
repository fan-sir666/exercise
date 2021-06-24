import React, { Fragment } from 'react';

function CartTotal(props) {
    const handleTotalPrice = () => {
        // 遍历求和
        let sum = 0;
        props.fczlist.forEach(item => {
            sum += item.price * item.num
        });
        return sum;
    }
    return (
        <Fragment>
            <div className="total">
                <span>总价：{handleTotalPrice()}</span>
                <button>结算</button>
            </div>
        </Fragment>
    )
}

export default CartTotal;