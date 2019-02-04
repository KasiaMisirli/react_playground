import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
// import Form from './Form'
import List from './List'


class App extends Component {
  render() {
    return(
      <div>
        <Hello name="REACT"/>
        <List/>
      </div>
    )
}
}
render(<App/>, document.getElementById('root'));