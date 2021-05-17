import React, { Fragment } from 'react'
/* 
由于React规定, 组件中只能有一个根元素
所以每次编写组件的时候, 我们都需要在最外层包裹一个冗余的标签div
如果不想渲染这个冗余的标签, 那么就可以使用Fragment来代替
*/

class ComDemo extends React.Component {
    render() {
        return (
            <Fragment>
                <div>来了老弟</div>
                <p>好嗨呦!!!</p>
            </Fragment>
        )
    }
}

export default ComDemo;