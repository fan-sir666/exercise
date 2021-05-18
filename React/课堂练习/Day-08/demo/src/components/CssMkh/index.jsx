import React from 'react'

// Css模块化只针对类名选择器和Id选择器生效
import homeStyle from './index.module.css';

class Home extends React.Component{

    render(){
        return(
            <div id={homeStyle.div}>
                <h3 className={homeStyle.h3}>Css模块化</h3>
                <p>的萨卡大家萨达就啊可是觉得看觉得卡拉涉及到了洒家离开多久啊是流量卡是觉得卡拉就打开拉萨机考虑</p>
            </div>
        )
    }
}

export default Home;