import React from 'react'

import classes from './WeatherTile.css'

const WeatherTile = props => (
    <div className={ classes.Tile }>
        <div>Image</div>
        <div>Temperature</div>
        <div>Weather</div>
    </div>
)

export default WeatherTile