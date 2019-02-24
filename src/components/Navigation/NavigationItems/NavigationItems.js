import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import NavigationSearchItem from './NavigationSearchItems/NavigationSearchItem'
import classes from './NavigationItems.css'

const navigationItems = props => {
    let removeDisplay = null
    if(props.remove) {
        removeDisplay = classes.Closed
    }
    return (
        <ul className={ classes.NavigationItems }>
            <NavigationItem 
            link="/"
            closed={ props.closed }>Home</NavigationItem>
            <NavigationSearchItem 
            className={ removeDisplay }
            closed={ props.closed }/>
        </ul>
    )
}

export default navigationItems