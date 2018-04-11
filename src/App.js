import React, { Component } from 'react';
import logo from './mw.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to middlewhere</h1>
        </header>
        <p className="App-intro">
          middlewhere is currently under construction. Check back soon!!
        </p>
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default App;
