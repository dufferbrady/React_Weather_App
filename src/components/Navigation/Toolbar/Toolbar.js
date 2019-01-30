import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Toolbar.css'

const toolbar = props => (
    <header className={ classes.Toolbar }>
        <div>
            <FontAwesomeIcon 
            icon="thermometer-three-quarters"
            className={ classes.Logo } />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar
