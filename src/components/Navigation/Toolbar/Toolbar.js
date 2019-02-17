import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.css'
import DrawerToggle from '../../UI/DrawerToggle/DrawerToggle'

const toolbar = props => (
    <header className={ classes.Toolbar }>
        <DrawerToggle open={ props.showSideDrawer } />
        <nav className={ classes.DesktopOnly }>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar
