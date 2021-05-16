import React from 'react';

// 导入联系者 解构接收者方法
import { Consumer } from '../../utils/content';

class Descendant extends React.Component {
    render() {
        return (
            //  {(data)=>()} 通过这样的解构来接收值 
            <Consumer>
                {(data) => (
                    <div>
                        <span>{data.title}</span>
                        <ul>
                            {data.list.map(item => (
                                <li>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Consumer>
        )
    }
}

export default Descendant;