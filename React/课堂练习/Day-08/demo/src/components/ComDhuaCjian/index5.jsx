import React, { Fragment } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index5.css';

class Home extends React.Component {
    state = {
        heroList: [{
            id: 1,
            name: "李元芳"
        },
        {
            id: 2,
            name: "小乔"
        },
        {
            id: 3,
            name: "吕布"
        }]
    }

    // 添加
    handleAdd = ()=>{
        this.setState({
            heroList:[...this.state.heroList, { id: this.state.heroList.length + 1, name: "貂蝉" + (this.state.heroList.length + 1) }]
        })
    }

    // 删除
    handleDel = (id)=>{
        const list = this.state.heroList.filter(item=>item.id !== id);
        this.setState({
            heroList:list
        })
    }

    render() {
        return (
            <Fragment>
                <ul>
                    {/* 所用的li构成一个列表 TransitionGroup包裹起来*/}
                    <TransitionGroup>
                        {
                            this.state.heroList.map(item => (
                                <CSSTransition key={item.id} classNames="list" timeout={3000}>
                                    <li onClick={()=>this.handleDel(item.id)}>{item.name}</li>
                                </CSSTransition>
                               )
                            )
                        }
                    </TransitionGroup>
                </ul>
                <button onClick={this.handleAdd}>添加</button>
            </Fragment>
        )
    }
}

export default Home;