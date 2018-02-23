import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: 'Artur', age: 31},
            {name: 'Tom', age: 30}
        ],
        another: 'hhh'
    }

    handleSwitchName = (newName) => {
        this.setState({persons: [
            {name: newName, age: 31},
            {name: 'Tom', age: 30}
        ]})
    }

    handleChangeName = (event) => {
        this.setState({persons: [
            {name: 'notChanged', age: 11},
            {name: event.target.value, age: 11}
        ]})
    }
  render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={style}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            Hello, I am a React app
            <button onClick={() => this.handleSwitchName('Isaverdyan')}>Switch Name</button>
        </p>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Walking</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                  clicked={this.handleSwitchName.bind(this, 'Isav!!!!!!!!')} changed = {this.handleChangeName}/>
      </div>
    );
    // return React.createElement('h1', null, 'kkkkkkkkkk');
  }
}

export default App;
