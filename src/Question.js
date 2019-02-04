import React, { Component } from 'react';
import Options from "./Options"
import axios from 'axios'

class Question extends Component {
  deleteQuestion = (id) => {
    axios.delete(`http://localhost:3000/ratingQuestions/${this.props.id}`)
    .then( (response)=> this.props.gettingData())
    this.setState({
      title: ''
    })
  }

  render(){
    return(
      <div>
        <h2></h2>
        {this.props.value.title}
        {this.optionsSelect()}
        <button onClick={this.deleteQuestion}>Delete question</button>
      </div>
    )
  }

  optionsSelect = () => {
    let op = ["Strongly agree","Agree","Disagree","Strongly disagree"]
    return op.map((value,i) => <Options value={value} key={i}/>)
  }
}
export default Question