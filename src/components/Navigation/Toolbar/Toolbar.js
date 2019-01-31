import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Toolbar.css'
import DrawerToggle from '../../UI/DrawerToggle/DrawerToggle'

const toolbar = props => (
    <header className={ classes.Toolbar }>
        <DrawerToggle open={ props.showSideDrawer } />
        <div>
            <FontAwesomeIcon 
            icon="thermometer-three-quarters"
            className={ classes.Logo } />
        </div>
        <nav className={ classes.DesktopOnly }>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar
