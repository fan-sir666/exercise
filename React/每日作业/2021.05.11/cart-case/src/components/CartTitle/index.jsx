import React, { Fragment } from 'react';

class CartTitle extends React.Component {
    render() {
        return (
            <Fragment>
               <div className="title">{this.props.fczname}的商品</div>
            </Fragment>
        )
    }
}

export default CartTitle;