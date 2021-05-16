import React from 'react';

// 导入共享行为
import widthMouse from '../../js/index.js'

const ZuoBiao = props => {
    return(
        <p>{props.x}-----{props.y}----我要给共享行为传值{props.czhi}</p>
    )
}

// 通过共享行为创建 具有功能性的组件
const MouseZuoBiao = widthMouse(ZuoBiao);


export default MouseZuoBiao;