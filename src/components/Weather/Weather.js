import React from 'react'

import classes from './Weather.css'

const weather = props => {
    let attachedClasses = [classes.Weather, classes.Closed];
    if(props.show) {
        attachedClasses=[classes.Weather] 
    } 
    return (
        <div className={ attachedClasses.join(' ') }>
            <p>City: {props.city}</p>
            <p>Country: {props.country}</p>
            <p>Temperature: {props.temperature}</p>
            <p>Conditions: {props.description}</p>
        </div>
    )
}


export default weather