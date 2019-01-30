import React from 'react'

import WeatherTile from './WeatherTile/WeatherTile'
import classes from './WeatherTiles.css'

const WeatherTiles = props => (
    <div className={ classes.Tiles }>
        <WeatherTile />
        <WeatherTile />
        <WeatherTile />
        <WeatherTile />
        <WeatherTile />
    </div>
)

export default WeatherTiles