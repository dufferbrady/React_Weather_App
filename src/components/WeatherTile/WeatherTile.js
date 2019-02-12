import React from 'react'

import classes from './WeatherTile.css'

const WeatherTile = props => (
    <div className={ classes.Tile }>
        <img src={ props.icon } alt="Forecasted Weather Icon"/>
        <p>Conditions: { props.conditions }</p>
        <div>
            <p>Max Temp: { props.temp_max } C</p>
            <p>Min Temp: { props.temp_min } C</p>
        </div>
    </div>
)


export default WeatherTile