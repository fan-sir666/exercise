import React from 'react'

class TotalPrice extends React.Component {
    // 获取所有状态为true的 数据
    totalState = ()=>{
        return this.props.list.filter(item=>item.checked);
    }
    // 计算总件数
    totalNum = ()=>{
        let sumNum = 0;
        this.totalState().forEach(item => {
            sumNum += item.count
        });
        return sumNum
    }
    // 计算总价
    totalPrice = ()=>{
        // console.log(this.props.list);
        let sumPrice = 0;
        this.totalState().forEach(item => {
            sumPrice += item.count * item.price
        });
        return sumPrice
    }
    render() {
        return (
            <div className="controls clearfix">
                <a href="#!" className="del-all" onClick={()=>this.props.ztofDelChecked()}>删除所选商品</a>
                <a href="#!" className="clear" onClick={()=>this.props.ztofDelAll()}>清理购物车</a>
                <a href="#!" className="pay">去结算</a>
                <p>
                    已经选中<span id="totalCount">{this.totalNum()}</span>件商品;总价：<span id="totalPrice" className="total-price">{this.totalPrice()}￥</span>
                </p>
            </div>
        )
    }
}

export default TotalPrice;