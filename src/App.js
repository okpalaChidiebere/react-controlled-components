import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayShopping from './DisplayShopping'
import Game from "./Game";
import DisplayChat from './DisplayChat'

class App extends Component {

  state = {
    query: '',  //we will bind our input field to to whatever the value of a certain property of a state is
  }

  /**
   * 
   * Each update to state has an associated handler function. In this case we need only one handler.
   * Event handlers for a controlled element update the component's state
   */
  handleChange = (event) => { //**the query argument will be passed event.target.value which is the value of the input field if we run an arrow function for the onchange event for the input box.
    this.setState(() => ({
      query: event.target.value.trim() //event.target.value is the dom attribute that we get this iput value from. Nothing about the normal form elements you know for html dom changes, it is just that now React is controlling the state of the form. This is why it is called Controlled component
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" 
          placeholder="Say Something" 
          value={this.state.query}
          onChange={//(event) => this.handleChange(event.target.value)} writing it this way we will have to write more code
            this.handleChange}/>
          <p className="echo">Echo:</p>
          <p>{this.state.query}</p>
        </div>
        <DisplayShopping />
        <Game />
        <DisplayChat />
      </div>
    );
  }
}

export default App;
