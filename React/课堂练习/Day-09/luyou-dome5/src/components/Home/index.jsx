import React from 'react';

import {NavLink,Route} from 'react-router-dom'

class Home extends React.Component {
    render(){
        return(
            <div>
                <h3>我是Home页面</h3>
                <NavLink exact to="/home/son1">去Son1</NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink exact to="/home/son2">去Son2</NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Route exact path="/home/son1" component={HomeSon1}/>
                <Route exact path="/home/son2" component={HomeSon2}/>
            </div>
        )
    }
}

class HomeSon1 extends React.Component {
    render(){
        return(
            <div>我是Home页面的Son1页面</div>
        )
    }
}

class HomeSon2 extends React.Component {
    render(){
        return(
            <div>我是Home页面的Son2页面</div>
        )
    }
}


export default Home;