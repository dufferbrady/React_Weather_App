import React from 'react'

import WeatherTile from '../../components/WeatherTile/WeatherTile'

const weatherForecast = props => {
    console.log("[WeatherForecast]", props.forecast )
    return (
        props.forecast.map((day, index) => {
            console.log(day)
            return (  
                <WeatherTile 
                key={index}
                icon={ day.day.condition.icon }
                max_temp={ day.day.maxtemp_c }
                min_temp={ day.day.mintemp_c }
                conditions={ day.day.condition.text }/>
            )
        }
            
    ))
}
export default weatherForecast