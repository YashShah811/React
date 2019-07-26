import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    useEffect(() => {
        console.log("Cockpit.js useEffect()");
        setTimeout(() => {
            alert("asd");
        }, 1000);
        return () => {
            console.log("cockpit.js useEffect cleanup.");
        }
    }, []);

    let buttonClass = '';
    if(props.togglePersonHandler) {
        buttonClass = classes.red;
    }

    let assignedClasses = [];
    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return(
        <Aux>
            <h1>React App...</h1>
            <p className={assignedClasses.join(' ')}>Paragraph</p>
            <button 
                className={buttonClass} 
                onClick={props.clicked}>
            Switch Name
            </button>
        </Aux>
    );
}

export default React.memo(cockpit);