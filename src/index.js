import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import QuestionList from './QuestionList'


class App extends Component {
  render() {
    return(
      <div>
        <Hello name="REACT"/>
        <QuestionList/>
      </div>
    )
  }
}
render(<App/>, document.getElementById('root'));