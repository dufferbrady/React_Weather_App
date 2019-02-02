import React from 'react'

import classes from './WeatherForm.css'

const weatherForm = props => (
    <form onSubmit={props.load} className={ classes.Form }>
        <input type="text" name="city" placeholder="City"/>
        <input type="text" name="country" placeholder="Country"/>
        <button>Get Weather</button>
    </form>
)

export default weatherForm