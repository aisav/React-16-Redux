import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
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
                            changed={(event) => this.props.nameChanged(event, person.id)}/>
                    })
                }
            </div>
        )
    }
}


export default Persons;