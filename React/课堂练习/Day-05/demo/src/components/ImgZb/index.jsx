import React from 'react';
// 导入封装好的共享行为
import Mouse from '../Mouse/index.jsx';
import Img from '../image/cat.png'
class ImgZb extends React.Component {
    render() {
        return (
            <Mouse>
                {(mouse)=>{
                    return(
                        <img alt="" src={Img} style={{ position: 'absolute', top: mouse.y, left: mouse.x }} />
                    )
                }}
            </Mouse>
        )
    }
}
export default ImgZb