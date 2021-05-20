import React from 'react'

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
            </div>
        )
    }
}

export default About;
