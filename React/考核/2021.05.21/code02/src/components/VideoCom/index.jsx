import React from 'react'

// 样式插件
import styled from 'styled-components'
// 路由插件
import { NavLink } from 'react-router-dom'
// 路由管理插件
import { renderRoutes } from 'react-router-config'

class VideoCom extends React.Component {
    render() {
        return (
            <DivBox>
                <h3>视频教程页面</h3>
                <div className="box-top">
                    <NavLink to='/videocom/web'>Web视频</NavLink>
                    <NavLink to='/videocom/vue'>Vue视频</NavLink>
                    <NavLink to='/videocom/react'>React视频</NavLink>
                    <NavLink to='/videocom/php'>Php视频</NavLink>
                </div>
                <div className="box-btm">
                    {renderRoutes(this.props.route.routes)}
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

export default VideoCom;