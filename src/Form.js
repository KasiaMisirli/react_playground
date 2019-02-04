import React, { Component } from 'react';
import axios from 'axios'
// import { throws } from 'assert';


class Form extends Component {
    state = {
        title: ""
    }

    addQuestion = (question) => {
        this.setState({title: question.target.value})
    }

    submitForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/ratingQuestions", {
            title: this.state.title
        })
        .then( (response)=> this.props.gettingData())
        this.setState({
            title: ''
        })   
    }

    render() {
      return (
        <div>
            <form onSubmit={this.submitForm}>
                <input onChange={this.addQuestion} value={this.state.question}/>
                <button type="submit" value="submit">Add new question</button>
            </form>
        </div>
      )
    }
  }
  
  export default Form