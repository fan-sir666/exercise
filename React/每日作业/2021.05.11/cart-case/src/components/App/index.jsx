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
        // console.log(id);
        const newArr = this.state.list.filter(item => item.id !== id);
        this.setState({
            list: newArr
        })
    }

    // componentDidUpdate(){
    //     console.log("update");
    // }

    //#endregion
    //#region 数量的改变
    handleChange = (aaa) => {
        // if (parms.type === "change") {
        //     this.state.list.some(item => {
        //         if (item.id === parms.id) {
        //             item.num = (parms.num < 0 ? 0 : parms.num);
        //             return true
        //         }
        //     })
        //     // console.log(this.state.list);
        //     // 改变状态
        //     this.setState({
        //         list: this.state.list
        //     })
        // }
        // 解构出list数组
        let { list } = this.state;
        // 输入改变数量
        if (aaa.type === "change") {
            // console.log(parms);
            // 修改状态
            this.setState({
                // 遍历id相同的对象 修改数量
                list: list.map(item => {
                    if (item.id === aaa.id) {
                        return {...item, num:aaa.num}
                    } else {
                        return item;
                    }
                })
            })
        }
    }
    //#endregion
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="cart">
                        <CartTitle fczname={this.state.name}></CartTitle>
                        <CartList fczlist={this.state.list} zcfdel={this.handleDel} zcfChange={this.handleChange}></CartList>
                        <CartTotal fczlist={this.state.list}></CartTotal>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;