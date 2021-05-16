import React from 'react';

class UnInputCom extends React.Component {
    constructor() {
        super();
        this.txt = React.createRef();
        this.state = {
            val: ''
        }
    }

    clickVal = () => {
        this.setState({
            val: this.txt.current.value
        })
    }

    render() {
        return (
            <div>
                <h3>我是非受控组件------{this.state.val}</h3>
                <input type="text" ref={this.txt} />
                <button onClick={this.clickVal}>点我获取输入框的值</button>
            </div>
        )
    }
}
export default UnInputCom