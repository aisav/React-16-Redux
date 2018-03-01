import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("App.js inside constructor", props);
        this.state = {
            persons: [
                {id: 'a1', name: 'Artur', age: 31},
                {id: 'a2', name: 'Tom', age: 30},
                {id: 'a3', name: 'Ani', age: 24}
            ],
            showPersons: false
        }
    }

    componentWillMount() {
        console.log("App.js inside componentWillMount");
    }

    componentDidMount() {
        console.log("App.js inside componentDidMount");
    }


    shouldComponentUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
        return true;
        // return false;
    }

    componentWillUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
    }

    componentDidUpdate () {
        console.log( '[UPDATE App.js] Inside componentDidUpdate' );
    }
    // state = {
    //     persons: [
    //         {id: 'a1', name: 'Artur', age: 31},
    //         {id: 'a2', name: 'Tom', age: 30},
    //         {id: 'a3', name: 'Ani', age: 24}
    //     ],
    //     showPersons: false
    // }

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
        console.log("App.js inside render");

        let persons = null;

        if (this.state.showPersons) {
            persons =
                    <Persons
                        pClicked={this.handleDeletePerson}
                        nameChanged={this.handleChangeName}
                        persons={this.state.persons}/>;
        }
        // let assignedClasses = ['red', 'bold'].join(' ');
        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.handleTogglePersons}/>
                {persons}
            </div>
        );
        // return React.createElement('h1', null, 'kkkkkkkkkk');
    }
}

export default App;
