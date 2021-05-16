import React, { Fragment } from 'react';

class CartTotal extends React.Component {
    handleTotalPrice = ()=>{
        // 遍历求和
        let sum = 0;
        this.props.fczlist.forEach(item => {
            sum += item.price * item.num
        });
        return sum;
    }
    render() {
        return (
            <Fragment>
                <div className="total">
                    <span>总价：{this.handleTotalPrice()}</span>
                    <button>结算</button>
                </div>
            </Fragment>
        )
    }
}

export default CartTotal;