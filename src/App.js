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
        showPersons: false
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

    handleTogglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    handleDeletePerson = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }
  render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };
        let persons = null;
        if(this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                clicked={()=>this.handleDeletePerson(index)}/>
                    })
                    }
                </div>
            )
        }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={style}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            Hello, I am a React app
            <button onClick={() => this.handleTogglePersons()}>Toggle Persons</button>
        </p>
          {persons}
      </div>
    );
    // return React.createElement('h1', null, 'kkkkkkkkkk');
  }
}

export default App;
