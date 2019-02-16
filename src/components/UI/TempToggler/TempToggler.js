import React from 'react'

import classes from './TempToggler.css'

const tempToggler = props => {
    let activeClasses = [classes.Icon, classes.InActive]
    if(!props.active) {
        activeClasses = [classes.Icon, classes.Active]
    }
    return (
        <button onClick={ props.click } disabled={ props.active } className={ activeClasses.join(' ') }>
            { props.children }
        </button>
    )
}

export default tempToggler