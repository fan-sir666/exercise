import React, { Fragment } from 'react';

import styled from 'styled-components';

// 在styled-component中样式的继承

const ObuttonA = styled.button`
width: 70px;
height: 30px;
`
const ObuttonBextendsA = styled(ObuttonA)`
background-color: #40a9ff;
color: #fff;
border: 1px solid #ff0000;
`



class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <ObuttonA>按钮A</ObuttonA>
                <br />
                <br />
                <br />
                <ObuttonBextendsA>按钮B</ObuttonBextendsA>
            </Fragment>
        )
    }
}

export default Home;