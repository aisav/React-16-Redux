import React, {Component} from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {id: 'a1', name: 'Artur', age: 31},
            {id: 'a2', name: 'Tom', age: 30}
        ],
        showPersons: false
    }

    handleChangeName = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons]
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    handleTogglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});


    }

    handleDeletePerson = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                clicked={() => this.handleDeletePerson(index)}
                                key={person.id}
                                changed={(event) => this.handleChangeName(event, person.id)}/>
                        })
                    }
                </div>
            )
            style.backgroundColor = 'red';

        }
        let classes = [];
        if (this.state.persons.length < 3) {
            classes.push('red')
        }
        if (this.state.persons.length < 2) {
            classes.push('bold')
        }
        // let classes = ['red', 'bold'].join(' ');
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" style={style}/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Hello, I am a React app
                </p>
                <p className={classes}>Paragraph for style</p>
                <div>
                    <button onClick={() => this.handleTogglePersons()} style={style}  key="b1">Toggle Persons</button>
                </div>
                {persons}
            </div>
        );
        // return React.createElement('h1', null, 'kkkkkkkkkk');
    }
}

export default App;
