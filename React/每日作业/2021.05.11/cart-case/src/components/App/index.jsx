import React, { Fragment } from 'react';

// 导入购物车头组件
import CartTitle from '../CartTitle/index.jsx'
// 导入购物车列表
import CartList from '../CartList/index.jsx'
// 导入购物车结算
import CartTotal from '../CartTotal/index.jsx'

class App extends React.Component {
    // 初始化数据
    state = {
        name: "王麻子",
        list: [{
            id: 1,
            name: 'TCL彩电',
            price: 1000,
            num: 1,
            img: 'img/a.jpg'
        }, {
            id: 2,
            name: '机顶盒',
            price: 1000,
            num: 1,
            img: 'img/b.jpg'
        }, {
            id: 3,
            name: '海尔冰箱',
            price: 1000,
            num: 1,
            img: 'img/c.jpg'
        }, {
            id: 4,
            name: '小米手机',
            price: 1000,
            num: 1,
            img: 'img/d.jpg'
        }, {
            id: 5,
            name: 'PPTV电视',
            price: 1000,
            num: 2,
            img: 'img/e.jpg'
        }]
    }

    //#region 删除
    handleDel = (id) => {
        const newArr = this.state.list.filter(item => item.id !== id);
        this.setState({
            list: newArr
        })
    }
    //#endregion
    //#region 
    handleChange = (id, val) => {
        // console.log(id,val);
        this.state.list.map(item => {
            if (item.id === id) {
                item.num = val
            }
            return item
        })
        // 更新状态
        this.setState({})
    }
    //#endregion
    //#region ++ --
    handleAdd = (id) => {
        this.setState({
            ...this.state,
            list: this.state.list.map(item => {
                if (item.id === id) {
                    item.num = item.num + 1
                }
                return item
            })
        })
    }
    handleMinus = (id) => {
        this.setState({
            ...this.state,
            list: this.state.list.map(item => {
                if (item.id === id) {
                    item.num = item.num <= 0 ? 0 : item.num - 1
                }
                return item
            })
        })
    }
    //#endregion
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="cart">
                        <CartTitle fczname={this.state.name}></CartTitle>
                        <CartList fczlist={this.state.list} zcfdel={this.handleDel} zcfChange={this.handleChange} zcfadd={this.handleAdd} zcfminus={this.handleMinus}></CartList>
                        <CartTotal fczlist={this.state.list}></CartTotal>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;