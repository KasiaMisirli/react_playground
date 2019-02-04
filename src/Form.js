import React, { Component } from 'react';
import axios from 'axios'
// import List from './List'

class Form extends Component {
    state = {
        title: ""
    }

    addQuestion = (question) => {
        this.setState({quest: question.target.value})
    }

    submitForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/ratingQuestions", { quest: this.state.title})
        .then( (response)=> console.log(response));
        // gettingData()
    }

    render() {
      return (
        <div>
            <form onSubmit={this.submitForm}>
                <input onChange={this.addQuestion} value={this.state.question}/>
                {this.state.title}
                <button type="submit" value="submit">Submit</button>
                {/* <List gettingData={this.gettingData}/> */}
            </form>
        </div>
      )
    }
  }
  
  export default Form