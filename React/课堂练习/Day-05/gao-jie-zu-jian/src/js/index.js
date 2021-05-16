// 高阶组件   代码复用

import React from 'react';

// WrappedComponent 该形参接收的是组件
const widthMouse = WrappedComponent => {

    class Mouse extends React.Component{
        state = {
            x:0,
            y:0
        }

        Fn = (e) => {
            this.setState({
                x:e.clientX,
                y:e.clientY
            })
        }

        componentDidMount(){
            window.addEventListener("mousemove", this.Fn)
            // console.log(this.props);
        }

        render(){
            return <WrappedComponent  {...this.state} {...this.props}></WrappedComponent>
        }
    }

    //#region  给高阶组件添加 displayName  作用:在浏览器调试中出现复用共享行为的组件的具体名称
    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    Mouse.displayName = `(${getDisplayName(WrappedComponent)})`;
    //#endregion

    return Mouse;
}


export default widthMouse;