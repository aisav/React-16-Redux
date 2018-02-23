import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            Hello, I am a React app
        </p>
          <Person name="Artur" age="31">My hobbies: Walking</Person>
          <Person name="Tom" age="30"/>
      </div>
    );
    // return React.createElement('h1', null, 'kkkkkkkkkk');
  }
}

export default App;
