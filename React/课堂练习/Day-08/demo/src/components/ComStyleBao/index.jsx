import React, { Fragment } from 'react';

// 使用 styled-component 样式包
import styled from 'styled-components';

// 创建样式函数组件
const Odiv = styled.div`
width:500px;
height:500px;
background-color: #ccc;
span {
font-size:36px;
color: blue;
}
`


class Home extends React.Component{
    render(){
        return(
            <Fragment>
                <Odiv>
                    <span>来了老弟,好嗨呦!!!</span>
                </Odiv>
            </Fragment>
        )
    }
}

export default Home;