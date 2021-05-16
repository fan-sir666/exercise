import React from 'react';
import ImgSrc from '../image/cat.png'
import widthMouse from '../../js/index.js'

class ImgZb extends React.Component{
    
    render(){
        return(
            <div>
                <img src={ImgSrc} alt=""  style={{position:'absolute',top:this.props.y,left:this.props.x}}  />
                {this.props.czhi}
            </div>
            
        )
    }
}

const MouseImgZb = widthMouse(ImgZb)

export default MouseImgZb