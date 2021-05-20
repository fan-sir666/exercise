import React from 'react'

class Home extends React.Component{
    state = {
        name:'',
        age:'',
        hobby:[]
    }

    componentDidMount(){
        //  通过 new 这个 URLSearchParams 创建一个实例 , 处理->   参数是 this.props.location.search(xx=yy&ww=zz)
        // URLSearchParams下的get方法来获取xx下的值yy  getAll获取返回一个数组
        const parpms = new URLSearchParams(this.props.location.search);
        this.setState({
            name:parpms.get('name'),
            age:parpms.get('age'),
            hobby:parpms.getAll('hobby'),
        })
    }

    render(){
        return(
            <div>
                <h3>我是Home页面</h3>
                <p>{this.state.name}-----{this.state.age}-----{this.state.hobby}</p>
            </div>
        )
    }
}

export default Home;
