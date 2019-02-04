import React, { Component } from 'react';
import axios from 'axios'
import Form from './Form'
import Options from './Options'

class List extends Component {
    state = {
        data: []
    }
    gettingData = () => {
       axios.get("http://localhost:3000/ratingQuestions")
       .then((response) => this.setState({data: response.data}))
    }
    displayData = () => {
        console.log(this.state.data)
        return this.state.data.map((qu,i) => <div><h2 options={this.options} key={i}>{qu.title}</h2>
        <Options/></div>
        )
    }
   
    render(){
        return(
            <div>
            <Form gettingData={this.gettingData}/>
            <button onClick={this.gettingData}>Display saved questions</button>
            {this.displayData()}
            <Options options={this.options}/>
            </div>
        )
    }
}
export default List