import React, { Component } from 'react';
// 导入AppGrSon
import AppGrSon from "./AppGrSon";
import { connect } from 'react-redux'

class AppSon extends Component {
    render() {
        return (
            <div className="App-son">
                <div className="container">
                    <h2>AppSon--记录信息</h2>
                    <ul>
                        {/* 提示：{时间}使用toLocaleString() */}
                        {/* 提示：{时间}使用toLocaleString() */}
                        {
                            this.props.list.map(item => (<li key={item.id}>{item.ctime.toLocaleString()}——{item.info}——{item.status === true? '已读':'未读'}</li>))
                        }
                    </ul>
                </div>
                {/* AppGrSon */}
                <AppGrSon/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(AppSon);