import React from 'react';

import PropTypes from 'prop-types';

class DefaultVal extends React.Component{
    state = {
        name:'张三'
    }
    render(){
        return(
            <p>我叫{this.state.name},{this.props.age}</p>
        )
    }
}

// eslint-disable-next-line react/no-typos
DefaultVal.PropTypes = {
    age:PropTypes.number
};

DefaultVal.defaultProps = {
    age: 20
  };

export default DefaultVal