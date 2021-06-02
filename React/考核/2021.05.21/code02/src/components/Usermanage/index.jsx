import React from 'react'

// 样式插件
import styled from 'styled-components'
// 路由插件
import { NavLink } from 'react-router-dom'
// 路由管理插件
import { renderRoutes } from 'react-router-config'

class Usermanage extends React.Component {
    // state = {
    //     student1:{
    //         pathname:'/usermanage/react',
    //         state:{
    //             name:'殷鸿亮',
    //             age:33
    //         }
    //     },
    //     student2:{
    //         pathname:'/usermanage/php',
    //         state:{
    //             name:'刘浩宇',
    //             age:25
    //         }
    //     }
    // }
    render() {
        // 1.2 通过URLSearchParams的实例对象 处理 this.props.location.search 地址
        let params = new URLSearchParams(this.props.location.search);
        // 1.3 获取相关属性的值
        this.data = {name:params.get('name'),age:params.get('age')}

        return (
            <DivBox>
                <h3>用户管理页面</h3>
                <div className="box-top">
                    {/* URL传参 1.1 */}
                    <NavLink to='/usermanage/web?name=鲁正一&age=22'>鲁正一</NavLink>
                    <NavLink to='/usermanage/vue?name=徐月&age=20'>徐玥</NavLink>
                    <NavLink to='/usermanage/react?name=殷鸿亮&age=33'>殷鸿亮</NavLink>
                    <NavLink to='/usermanage/php?name=刘浩宇&age=25'>徐玥</NavLink>
                    {/* to属性传对象 */}
                    {/* <NavLink to={this.state.student1}>殷鸿亮</NavLink>
                    <NavLink to={this.state.student2}>刘浩宇</NavLink> */}
                </div>
                <div className="box-btm">
                    {/* 1.4 视图层 第二个参数将数据抛出去 */}
                    {renderRoutes(this.props.route.routes,this.data)}
                    {/* {renderRoutes(this.props.route.routes)} */}
                </div>
            </DivBox>
        )
    }
}

//#region 样式组件
const DivBox = styled.div`
.box-top {
    a {
        margin-right: 10px;
        color: #333;
        text-decoration: none;
    }
    a.active {
        color: yellowgreen;
    }
}
.box-btm {
    padding: 30px;
    font-weight: 900;
    color: red;
}
`
//#endregion

export default Usermanage;