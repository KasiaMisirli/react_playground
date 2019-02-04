import React, { Component } from 'react';

class Options extends Component {

    options = () => {
        let op = ["Strongly agree","Agree","Disagree","Strongly disagree"]
        return op.map((value,i) => <div><input type="radio" key={i} value={value} />{value} </div>)
    }
    render(){
        return(
            <div>
               {this.options()}
            </div>
        )
    }
}
export default Options