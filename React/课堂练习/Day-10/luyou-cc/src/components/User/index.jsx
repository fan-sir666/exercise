import React from 'react'

class User extends React.Component{
    state = {
        paramsObj:{}
    }
    componentDidMount(){
        // console.log(this.props.location.state);
        this.setState({
            paramsObj:this.props.location.state
        })
    }
    render(){
        return(
            <div>
                <h3>我是User页面</h3>
                <p>我叫{this.state.paramsObj.name},今年{this.state.paramsObj.age}岁了,爱好{this.state.paramsObj.hobby}</p>
            </div>
        )
    }
}

export default User;
