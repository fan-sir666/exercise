import React from 'react'

import {NavLink} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

class About extends React.Component{
    state={
        id:''
    }
    componentDidMount(){
        // console.log(this.props.match.params);
        this.setState({
            id:this.props.match.params.id
        })
    }
    render(){
        return(
            <div>
                <h3>我是About页面</h3>
                <p>传过来的Id--{this.state.id}</p>
                <NavLink to="/about/:id/my">关于我</NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/about/:id/her">关于他</NavLink>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}

export default About;
