import React from 'react'

class PhpUsermanage extends React.Component {
    // state = {
    //     name: '',
    //     age: ''
    // }
    // componentDidMount() {
    //     let params = new URLSearchParams(this.props.location.state)
    //     this.setState({
    //         name: params.get('name'),
    //         age: params.get('age'),
    //     })
    // }
    render() {
        return (
            // <div>{this.state.name} ---- {this.state.age}</div>
            <div>{this.props.name} ---- {this.props.age}</div>
        )
    }
}

export default PhpUsermanage;