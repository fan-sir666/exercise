import React from 'react';

import ACom from '../ACom/index.jsx'
import BCom from '../BCom/index.jsx'

class FatherCom extends React.Component{
   state = {
       sum : 0
   }

   changeValA=(val)=>{
       this.setState({
        sum: val
       })
   }

   changeValB=(val)=>{
    this.setState({
     sum: val
    })
}


   render(){
       return(
           <div>
               <div>和:{this.state.sum}</div>
               <ACom fcz={this.state.sum} xxx={this.changeValA}></ACom>
               <BCom fcz={this.state.sum} yyy={this.changeValB}></BCom>
           </div>
       )
   }
}

export default FatherCom;