import React, { Fragment } from 'react';

import styled from 'styled-components';

// 在styled-component中使用React传递的属性
// ${props => props.xxx}
const Obutton = styled.button`
width:${props => props.width};
height:${props => props.height};
background-color:${props => props.primary ? "#40a9ff" : "#fff"};
color:${props => props.primary ? "#fff" : "#40a9ff"};
border:1px solid #f3f3f3;
`



class Home extends React.Component {
    state = {
        width: '70px',
        height: '30px'
    }

    render() {
        return (
            <Fragment>
                <Obutton primary {...this.state}>按钮A</Obutton>
                <br />
                <br />
                <br />
                <Obutton {...this.state}>按钮B</Obutton>
            </Fragment>
        )
    }
}

export default Home;