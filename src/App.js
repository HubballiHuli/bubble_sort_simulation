import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      orgiginalList : [5,7,4,3,9,2,1,6,8],
      steps : []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Original Array</h1>
        {
          this.state.orgiginalList.map(element => (<span className="arraySpan" >{element}</span>))
        }
        <hr></hr>
      </div>
    );
  }
}

class Display extends Component {
  render(){
    return(
      <div>
      {

      }
      </div>
    );
  }
}

export default App;
