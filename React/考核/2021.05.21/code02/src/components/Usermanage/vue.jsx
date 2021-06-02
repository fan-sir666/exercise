import React from 'react'

class VueUsermanage extends React.Component {
    // state = {
    //     name: '',
    //     age: ''
    // }
    // componentDidMount() {
    //     let params = new URLSearchParams(this.props.location.search)
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

export default VueUsermanage;