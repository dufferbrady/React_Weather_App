import React from 'react'

import classes from './Button.css'

const Button = props => {
    let loadingClass = classes.Button
    if(props.forecastLoading) {
        loadingClass = classes.Onclic
    }
    if(props.forecast) {
        loadingClass = classes.Closed
    }
    return (
        <button
        className={ loadingClass }
        onClick={ props.load }>{ props.children }</button>
    )
}

export default Button