import React from 'react';

class ACom extends React.Component {
 
    handleAddVal=()=>{
        // console.log(this.props.fcz);

        let aaa = this.props.fcz + 1;
        this.props.xxx(aaa)
    }
   
    render(){
        return(
            <div>
                <button onClick={this.handleAddVal}>A组件子传父{this.props.fcz}</button>
            </div>
        )
    }

}

export default ACom;