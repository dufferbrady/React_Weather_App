import React from 'react'

import WeatherTile from '../../components/WeatherTile/WeatherTile'

const weatherForecast = props => {
    console.log("[WeatherForecast]", props.forecast )
    let weatherTiles = props.forecast.map((day, index) => {
        // console.log(day)
        let temp_max = (day.main.temp_max - 273.15).toFixed(1)
        let temp_min = (day.main.temp_min - 273.15).toFixed(1)
        let imageURL = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`
        // console.log(day.weather[0].description)
        return (
            <WeatherTile 
            key={ index }
            temp_max={ temp_max }
            temp_min={ temp_min }
            icon={ imageURL }
            conditions={ day.weather[0].description }/>
        )
    })
    return (
        <div>
            { weatherTiles }
        </div>
    )
}

export default weatherForecast