import React from 'react';

class BCom extends React.Component {
 
    handleAddVal=()=>{
        // console.log(this.props.fcz);

        let aaa = this.props.fcz + 1;
        this.props.yyy(aaa)
    }
   
    render(){
        return(
            <div>
                <button onClick={this.handleAddVal}>B组件子传父{this.props.fcz}</button>
            </div>
        )
    }

}

export default BCom;