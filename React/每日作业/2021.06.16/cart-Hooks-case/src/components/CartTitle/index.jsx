import React, { Fragment } from 'react';

function CartTitle(props) {
    return (
        <Fragment>
            <div className="title">{props.fczname}的商品</div>
        </Fragment>
    )
}

export default CartTitle;