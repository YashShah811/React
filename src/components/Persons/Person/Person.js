import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render(){
    console.log("person.js rendering...");
    return (
        <Aux>
            <p onClick={this.props.click}>Name : {this.props.name}, Age : {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change} value={this.props.name}/>
        </Aux>
    );
    }
}

export default withClass(Person, classes.Person);