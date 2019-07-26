import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log("Persons.js getDerivedStateFromProps");
    //     return state;
    // }

    // shouldComponentUpdate(newProps, newState) {
    //     console.log("Persons.js shouldComponentUpdate");
    //     return true;
    // }

    getSnapshotBeforeUpdate(newProps, newState) {
        console.log("Persons.js getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Persons.js componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("persons.js componentWillUnmount");
    }

    render() {
        console.log("persons.js rendering...");
        return this.props.persons.map((person1, index) => {
            return (<Person 
            click={() => {this.props.clicked(index)}}
            name={person1.name}
            age={person1.age}
            key={person1.id}
            change={(event) => this.props.changed(event, person1.id)}
            />
            );
        });
    }
};

export default Persons;