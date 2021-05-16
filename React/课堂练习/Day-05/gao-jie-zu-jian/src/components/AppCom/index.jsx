import React from 'react';

// 导入显示作表的功能组件
import ZuoBiao from '../ZuoBiao/index.jsx'
import ImgZb from '../ImgZb/index.jsx'

class App extends React.Component{
    render(){
         return(
             <div>
                 <ZuoBiao czhi={'坐标显示'}></ZuoBiao>
                 <ImgZb czhi={'我是图片'}></ImgZb>
             </div>
         )
    }
}

export default App;