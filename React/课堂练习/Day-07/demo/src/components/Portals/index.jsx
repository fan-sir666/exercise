import React from 'react';
import ReactDOM from 'react-dom';

// Portal提供了一种将组件渲染到其它元素中的能力

class Father extends React.Component {
    render() {
        return (
            <div>
                <h3>我是父组件Father</h3>
                <Son>
                    <h3>我是子组件Son</h3>
                </Son>
            </div>
        )
    }
}


class Son extends React.Component {
    render() {
        // return(
        //     <div>
        //         <h3>我是子组件Son</h3>
        //     </div>
        // )

        // ReactDOM.createPortal()
        // createPortal总共有三个参数，我们使用两个
        // 第一个参数: 子元素 或 组件
        // 第二个参数: 把这一段结构渲染到哪里
        return ReactDOM.createPortal(this.props.children,document.getElementById('app'))
    }
}

export default Father;