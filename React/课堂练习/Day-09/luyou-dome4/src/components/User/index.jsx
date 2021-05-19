import React from 'react';

// Redirect重定向的使用
import {Redirect} from 'react-router-dom'

class User extends React.Component {
    state = {
        // 未登录
        isLogin:false
    }
    render(){
        let user = <div>我是User页面</div>
        // 通过三元运算符判断状态实现重定向
        return this.state.isLogin ? user : <Redirect to='/login'/>
    }
}

export default User;