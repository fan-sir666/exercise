import React from 'react';
import Mouse from '../Mouse/index.jsx';
class ZuoBiao extends React.Component{
    render(){
        return(
            <Mouse>
                {(mouse)=>{
                    return (
                        <p>{mouse.x} ---- {mouse.y}</p>
                    )
                }}
            </Mouse>
        )
    }
}

export default ZuoBiao;