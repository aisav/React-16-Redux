import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    constructor( props ) {
        super( props );
        console.log( '[Persons.js] Inside Constructor', props );
    }

    componentWillMount () {
        console.log( '[Persons.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Persons.js] Inside componentDidMount()' );
    }

    componentWillReceiveProps ( nextProps ) {
        console.log( '[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps );
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState );
        return nextProps.persons !== this.props.persons;
        // return false;
    }

    componentWillUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState );
    }

    componentDidUpdate () {
        console.log( '[UPDATE Persons.js] Inside componentDidUpdate' );
    }

    render() {
        return (
            <div>
                {
                    this.props.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            clicked={() => this.props.pClicked(index)}
                            key={person.id}
                            changed={(event) => this.props.nameChanged(event, person.id)}
                            position = {index}/>
                    })
                }
            </div>
        )
    }
}


export default Persons;