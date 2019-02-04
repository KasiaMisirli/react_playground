import React, { Component } from 'react';

class Options extends Component {
    
  render(){
    return(
      <div>
        <input type="radio" value={this.props.value}/>
        {this.props.value}
      </div>
    )
  }
}
export default Options