import React from 'react'

import classes from './Weather.css'
import WeatherForecast from '../../containers/WeatherForecast/WeatherForecast'

const weather = props => {
    let attachedClasses = [classes.Weather, classes.Closed];
    if(props.show) {
        attachedClasses=[classes.Weather] 
    } 
    let weatherForecast = null;

    if(props.showForecast) {
        weatherForecast = <WeatherForecast forecast={ props.forecast }/>
    }

    return (
        <div className={ attachedClasses.join(' ') }>
            <img src={ props.icon } alt="The current weather"/>
            <p>City: {props.city}</p>
            <p>Country: {props.country}</p>
            <p>Temperature: {props.temperature}</p>
            <p>Conditions: {props.description}</p>
            <button onClick={ props.getForecast }>Get Forecast!</button>
            <div>
            { weatherForecast }
            </div>
        </div>
    )
}


export default weather