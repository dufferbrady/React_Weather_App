import React from 'react'

import classes from './WeatherForm.css'

const weatherForm = props => (
    <form onSubmit={ props.load } className={ classes.Container }>
        <input autoComplete="off" type="text" name="city" placeholder="City" required/>
        <div className={ classes.Search }></div>
    </form>
)


export default weatherForm