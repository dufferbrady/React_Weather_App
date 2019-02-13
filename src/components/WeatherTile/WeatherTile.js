import React from 'react'

import classes from './WeatherTile.css'

const WeatherTile = props => {
    return (
        <div className={ classes.Tile }>
            <span className={ classes.TileHeader }>{ props.day }</span>
            <img src={ props.icon } alt="Forecasted Weather Icon"/>
            <div className={ classes.TileTemp }>
                <span>{ props.temp_max }&deg;</span>
                <span>{ props.temp_min }&deg;</span>
            </div>
        </div>  
    )
}
    


export default WeatherTile