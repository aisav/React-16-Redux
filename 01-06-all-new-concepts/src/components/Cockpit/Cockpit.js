import React from 'react';
import classes from './Cockbit.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length < 3) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length < 2) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>Click on users Paragraph for remove</p>
            <div>
                <button
                    onClick={() => props.clicked()}
                    key="b1"
                    className={btnClass}
                >Toggle Persons</button>
            </div>
        </div>
    )
}

export default cockpit;