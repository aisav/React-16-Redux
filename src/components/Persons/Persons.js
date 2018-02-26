import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return (
        <div>
            {
                props.persons.map((person, index) => {
                    return <Person
                        name={person.name}
                        age={person.age}
                        clicked={() => props.pClicked(index)}
                        key={person.id}
                        changed={(event) => props.nameChanged(event, person.id)}/>
                })
            }
        </div>
    )
}

export default persons;