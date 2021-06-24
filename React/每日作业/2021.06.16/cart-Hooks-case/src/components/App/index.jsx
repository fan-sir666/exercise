import React, { Fragment, useState } from 'react';

// 导入购物车头组件
import CartTitle from '../CartTitle/index.jsx'
// 导入购物车列表
import CartList from '../CartList/index.jsx'
// 导入购物车结算
import CartTotal from '../CartTotal/index.jsx'

function App() {
    // 初始化数据
    const [nameState] = useState('半瓢水')
    const [listState, setListState] = useState([{
        id: 1,
        name: 'TCL彩电',
        price: 1010,
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
    }])
    // state = {
    //     name: "王麻子",
    //     list: [{
    //         id: 1,
    //         name: 'TCL彩电',
    //         price: 1000,
    //         num: 1,
    //         img: 'img/a.jpg'
    //     }, {
    //         id: 2,
    //         name: '机顶盒',
    //         price: 1000,
    //         num: 1,
    //         img: 'img/b.jpg'
    //     }, {
    //         id: 3,
    //         name: '海尔冰箱',
    //         price: 1000,
    //         num: 1,
    //         img: 'img/c.jpg'
    //     }, {
    //         id: 4,
    //         name: '小米手机',
    //         price: 1000,
    //         num: 1,
    //         img: 'img/d.jpg'
    //     }, {
    //         id: 5,
    //         name: 'PPTV电视',
    //         price: 1000,
    //         num: 2,
    //         img: 'img/e.jpg'
    //     }]
    // }

    //#region 删除
    const handleDel = (id) => {
        const newArr = listState.filter(item => item.id !== id);
        setListState(newArr)
        // this.setState({
        //     list: newArr
        // })
    }
    //#endregion
    //#region 
    const handleChange = (id, val) => {
        // console.log(id,val);
        const newArr = listState.map(item => {
            if (item.id === id) {
                item.num = val
            }
            return item
        })
        // 更新状态
        setListState(newArr)
    }
    //#endregion
    //#region ++ --
    const handleAdd = (id) => {
        const newArr = listState.map(item => {
            if (item.id === id) {
                item.num = item.num + 1
            }
            return item
        })
        setListState(newArr)
        // this.setState({
        //     ...this.state,
        //     list: this.state.list.map(item => {
        //         if (item.id === id) {
        //             item.num = item.num + 1
        //         }
        //         return item
        //     })
        // })
    }
    const handleMinus = (id) => {
        const newArr = listState.map(item => {
            if (item.id === id) {
                item.num = item.num <= 0 ? 0 : item.num - 1
            }
            return item
        })
        setListState(newArr)
        // this.setState({
        //     ...this.state,
        //     list: this.state.list.map(item => {
        //         if (item.id === id) {
        //             item.num = item.num <= 0 ? 0 : item.num - 1
        //         }
        //         return item
        //     })
        // })
    }
    //#endregion
    return (
        <Fragment>
            <div className="container">
                <div className="cart">
                    <CartTitle fczname={nameState}></CartTitle>
                    <CartList fczlist={listState} zcfdel={handleDel} zcfChange={handleChange} zcfadd={handleAdd} zcfminus={handleMinus}></CartList>
                    <CartTotal fczlist={listState}></CartTotal>
                </div>
            </div>
        </Fragment>
    )
}

export default App;