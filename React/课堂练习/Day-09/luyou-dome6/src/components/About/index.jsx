import React from 'react';
import {NavLink,Route} from 'react-router-dom'
import MyCom from '../MyCom/index.jsx'

class About extends React.Component {
    handleGoTo=()=>{
        // hash模式
        // window.location.hash = '/about/mycom'

        // history模式
        this.props.history.push("/about/mycom")
    }

    render(){
        return(
            <div>
                <h3>我是About页面</h3>
                <NavLink exact to="/about/mycom"></NavLink>
                <Route exact path="/about/mycom" component={MyCom}/>
                <button onClick={this.handleGoTo}>跳转到我的页面</button>
            </div>
        )
    }
}

export default About;