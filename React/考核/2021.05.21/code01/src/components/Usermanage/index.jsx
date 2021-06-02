import React, { Fragment } from "react"
import { NavLink, Redirect, Route } from "react-router-dom"

// URl传产props.location.search 接收
const Web_ = (props) => {
    let parm = new URLSearchParams(props.location.search)
    return (
        <div>{parm.get('name')}----{parm.get('age')}</div>
    )
}
class Vue_ extends React.Component {
    state = {
        name: '',
        age: ''
    }
    componentDidMount() {
        let parm = new URLSearchParams(this.props.location.search)
        this.setState({
            name: parm.get('name'),
            age: parm.get('age')
        })
    }
    render() {
        return (
            <div>{this.state.name} ---- {this.state.age}</div>
        )
    }
}

// 对象传参 props.location.state 接收
const React_ = (props) => {
    let parm = new URLSearchParams(props.location.state)
    return (
        <div>{parm.get('name')}----{parm.get('age')}</div>
    )
}

class Php_ extends React.Component {
    state = {
        name: '',
        age: ''
    }
    componentDidMount() {
        let parm = new URLSearchParams(this.props.location.state)
        this.setState({
            name: parm.get('name'),
            age: parm.get('age')
        })
    }
    render() {
        return (
            <div>{this.state.name} ---- {this.state.age}</div>
        )
    }
}

class Usermanage extends React.Component {
    render() {
        return (
            <Fragment>
                <h3>Usermanage页面</h3>
                <div className="usermanage-nav">
                    {/* URl传参 */}
                    <NavLink to="/usermanage/web?age=20岁&name=鲁正一">鲁正一</NavLink>
                    <NavLink to="/usermanage/vue?age=18岁&name=徐玥">徐玥</NavLink>
                    {/* 对象传参 */}
                    <NavLink to={{
                        pathname: '/usermanage/react',
                        state: {
                            name: '殷鸿亮',
                            age: 22
                        }
                    }}>殷鸿亮</NavLink>
                    <NavLink to={
                        {
                            pathname: '/usermanage/php',
                            state: {
                                name: '刘浩宇',
                                age: 22
                            }
                        }
                    }>刘浩宇</NavLink>
                </div>

                <div className="usermanage-content">
                    <Redirect to="/usermanage/web?age=20岁&name=鲁正一"></Redirect>
                    <Route path="/usermanage/web" component={Web_}></Route>
                    <Route path="/usermanage/vue" component={Vue_}></Route>
                    <Route path="/usermanage/react" component={React_}></Route>
                    <Route path="/usermanage/php" component={Php_}></Route>
                </div>
            </Fragment>
        );
    }
}

export default Usermanage;