import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc//Aux';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("app.js comnstructor."); 
  }

  state = {
    persons: [
      {id: 1, name: "abc1", age: 20},
      {id: 2, name: "abc2", age: 21},
      {id: 3, name: "abc3", age: 22},
      {id: 4, name: "abc4", age: 23},
      {id: 5, name: "abc5", age: 24}
    ],
    toggle: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("app.js getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  nameChangeHendler = (event, index) => {

    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === index;
    });

    const persons = {...this.state.persons[personIndex]};

    persons.name = event.target.value;

    const person = [...this.state.persons];

    person[personIndex] = persons;

    this.setState({persons: person});
  };

  togglePersonHandler = () => {
    const togglePerson = this.state.toggle;
    this.setState({
        toggle : !togglePerson
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  render() {

    console.log("app.js renser");

    let person = null;

    if(this.state.toggle) {
      person = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHendler}
          />  
    }

    return (
      <Aux>
        <Cockpit 
          togglePersonHandler={this.state.toggle}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        />
        {person}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
