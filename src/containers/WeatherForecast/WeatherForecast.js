import React from 'react'

import WeatherTile from '../../components/WeatherTile/WeatherTile'
import classes from './WeatherForecast.css'

const DATES = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
]

const weatherForecast = props => {
    console.log("[WeatherForecast]", props.forecast )
    let dd = new Date().getDay()
    let weatherTiles = props.forecast.map((day, index) => {
        index = (dd + index) % 7;
        let date = DATES[index]
        let temp_max, temp_min;
        if(props.celsiusActive) {
            temp_max = (day.main.temp_max - 273.15).toFixed(0)
            temp_min = (day.main.temp_min - 273.15).toFixed(0)
        }
        if(props.farenheitActive) {
            temp_max = ((day.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0);
            temp_min = ((day.main.temp_min - 273.15) * (9 / 5) + 32).toFixed(0);
        }
        let imageURL = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`
        return (
            <WeatherTile 
            day={ date }
            key={ index }
            temp_max={ temp_max }
            temp_min={ temp_min }
            icon={ imageURL }
            conditions={ day.weather[0].description }/>
        )
    })
    return (
        <div className={ classes.WeatherForecast }>
            { weatherTiles }
        </div>
    )
}

export default weatherForecast