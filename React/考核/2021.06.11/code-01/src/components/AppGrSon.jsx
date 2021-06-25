import React, { Component } from 'react';
import { connect } from 'react-redux'
import {delData} from '../store/action'
class AppGrSon extends Component {
    fList = () => {
        return this.props.list.filter(item => !item.status)
    }
    render() {
        return (
            <div className="App-gr-son">
                <h3>AppGrSon--待读信息</h3>
                <ul>
                    {
                        this.fList().map(item => (<li key={item.id}>{item.info}<button onClick={()=>this.props.fixData(item.id)}>点击已读</button></li>))
                    }
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fixData(id){
            const item = {
                id:id,
                ctime:new Date()
            }
            dispatch(delData(item))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppGrSon);