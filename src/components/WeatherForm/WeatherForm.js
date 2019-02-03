import React from 'react'

import classes from './WeatherForm.css'

const weatherForm = props => (
    <form onSubmit={ props.load } className={ classes.Form }>
        <input type="text" name="city" placeholder="City" required/>
        {/* <input type="text" name="country" placeholder="Country" required/> */}
        <button>Get Weather</button>
    </form>
)


export default weatherForm