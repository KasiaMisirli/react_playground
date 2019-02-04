import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Form from './Form'
import List from './List'


class App extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return(
      <div>
        <Hello name="REACT"/>
        <Form/>
        <List/>
      </div>
    )
}
}
render(<App/>, document.getElementById('root'));