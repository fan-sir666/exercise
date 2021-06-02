import React, { Fragment } from 'react';
// 样式模块化
import VideoStyle from './index.module.css'
import { NavLink, Route, Redirect } from 'react-router-dom';

class VideoCom extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="video">
                    <h3>Video页面</h3>
                    <div className={VideoStyle.videoNav}>
                        <NavLink activeClassName={VideoStyle.NavLj} style={{marginRight:'20px'}}  to="/video/web">Web视频</NavLink>
                        <NavLink activeClassName={VideoStyle.NavLj} style={{marginRight:'20px'}}  to="/video/vue">Vue视频</NavLink>
                        <NavLink activeClassName={VideoStyle.NavLj} style={{marginRight:'20px'}}  to="/video/react">React视频</NavLink>
                        <NavLink activeClassName={VideoStyle.NavLj} style={{marginRight:'20px'}}  to="/video/php">Php视频</NavLink>
                    </div>
                    <div className="video-content">
                        <Redirect to="/video/web"></Redirect>
                        <Route path="/video/web" component={Web_}></Route>
                        <Route path="/video/vue" component={Vue_}></Route>
                        <Route path="/video/react" component={React_}></Route>
                        <Route path="/video/php" component={Php_}></Route>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const Web_ = () => {
    return (
        <div>Web视频教程</div>
    )
}
const Vue_ = () => {
    return (
        <div>Vue视频教程</div>
    )
}
const React_ = () => {
    return (
        <div>React视频教程</div>
    )
}
const Php_ = () => {
    return (
        <div>Php视频教程</div>
    )
}
export default VideoCom