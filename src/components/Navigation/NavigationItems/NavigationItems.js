import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import NavigationSearchItem from './NavigationSearchItems/NavigationSearchItem'
import classes from './NavigationItems.css'

const navigationItems = props => (
    <ul className={ classes.NavigationItems }>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationSearchItem/>
    </ul>
)

export default navigationItems