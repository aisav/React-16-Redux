import React, {Component} from 'react';
import Person from './Person/Person';
import classes from'./App.css';

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
        let btnClass = '';

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
            );
            btnClass = classes.Red;
        }
        let assignedClasses = [];
        if (this.state.persons.length < 2) {
            assignedClasses.push(classes.red)
        }
        if (this.state.persons.length < 1) {
            assignedClasses.push(classes.bold)
        }
        // let assignedClasses = ['red', 'bold'].join(' ');
        return (
            <div className={classes.App}>

                <h1>Hello, I am a React app</h1>
                <p className={assignedClasses.join(' ')}>Click on users Paragraph for remove</p>
                <div>
                    <button
                        onClick={() => this.handleTogglePersons()}
                        key="b1"
                        className={btnClass}
                    >Toggle Persons</button>
                </div>
                {persons}
            </div>
        );
        // return React.createElement('h1', null, 'kkkkkkkkkk');
    }
}

export default App;
