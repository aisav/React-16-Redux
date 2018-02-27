import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("Person.js inside constructor", props);
    }

    componentWillMount() {
        console.log("Person.js inside componentWillMount");
    }

    componentDidMount() {
        console.log("Person.js inside componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("[Update Person.js] inside componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Update Person.js] inside shouldComponentUpdate", nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }



    render () {
        console.log("Person.js inside render");
        return (
            <div className={classes.Person} >
                {/*<p>I am a person and I am {Math.floor(Math.random()*30)} years old</p>*/}
                <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}


export  default Person;