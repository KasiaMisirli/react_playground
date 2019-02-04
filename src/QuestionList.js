import React, { Component } from 'react';
import axios from 'axios'
import Form from './Form'
import Question from "./Question"

class QuestionList extends Component {
  state = {
    data: []
  }
  gettingData = () => {
    axios.get("http://localhost:3000/ratingQuestions")
    .then((response) => this.setState({data: response.data}))
  }

  confirmDeleteQuestion = () => {
    this.deleteQuestion(this.props.id)
  }

  render(){
    return(
      <div>
      <Form gettingData={this.gettingData}/>
      <button onClick={this.gettingData}>Display saved questions</button>
      {this.displayData()}

      </div>
    )
  }

  displayData = () => {
    console.log(this.state.data)
    return this.state.data.map((value,i) => <Question 
    gettingData={this.gettingData} key={i} value={value} {...value}/> )
  } 
}

export default QuestionList