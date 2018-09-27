import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      orgiginalList : [5,7,4,3,9,2,1,6,8],
      sortedLists : []
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
        <button className="arraySpan">Next</button>
        <hr></hr>
        <Display sortedLists = {this.state.sortedLists} />
      </div>
    );
  }
}

class Display extends Component {


  render(){
    return(
      <div>
      {
        (function(list){
          for(let i of list){
            i.map(element => (<div> <span className="arraySpan" >{element}</span> </div>))
          }
        })(this.props.sortedLists)
      }
      
      </div>
    );
  
  }
}

export default App;
