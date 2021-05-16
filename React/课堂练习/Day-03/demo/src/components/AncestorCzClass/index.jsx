/* 
    祖先传值 必须是直系亲属的传值，不可以是表亲的关系，在我们使用组件抽离的方式时需要引入共同的联系者
*/

import React from 'react';

// 导入联系者 解构提供者方法
import { Provider } from '../../utils/content';

// 导入接收者
import Descendant from '../DescendantJzClass/index';
class Ancestor extends React.Component{
    state = {
        title:'来了老弟',
        list:[
            {id:1,name:'张三',age:18},
            {id:2,name:'李四',age:20},
            {id:3,name:'王五',age:22},
        ]  
    }
    render(){
        return(
            <Provider value={this.state}>
                <div>我是祖先组件</div>
                <Descendant></Descendant>
            </Provider> 
        )
    }
}

export default Ancestor;