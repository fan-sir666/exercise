import React from 'react';

// 导入外链样式
import './index.css'

class Home extends React.Component {
    render() {
        return (
            <div className='box'>
                <h3 style={{ width: "300px", height: "100px", color: "red", textAlign: "center",backgroundColor:'yellowgreen' }}>我是行内样式</h3>
                <p>来了老弟好该有的洒家扩大较大空间打开拉萨建档立卡就了大撒大撒</p>
            </div>
        )
    }
}

export default Home;