import React, { Component } from 'react';
import axios from 'axios'

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
        return this.state.data.map((qu,i) => <h2 key={i}>{qu.title}</h2>)
    }
   
    render(){
        return(
            <div>
            <button onClick={this.gettingData}>Display saved questions</button>
            {this.displayData()}
            </div>
        )
    }
}
export default List