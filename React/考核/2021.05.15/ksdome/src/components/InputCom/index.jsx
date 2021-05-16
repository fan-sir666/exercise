import React from 'react';

class InputCom extends React.Component {
    state = {
        val:10
    }

    changeVal = (e)=>{
        this.setState({
            val:e.target.value
        })
    }

    render(){
        return(
           <div>
               <h3>我是受控组件{this.state.val}</h3>
               <input type="text" value={this.state.val} onChange={this.changeVal}/>
           </div>
        )
    }
}
export default InputCom