import React from 'react'

import classes from './DrawerToggle.css'

const DrawerToggle = props => (
    <div className={ classes.Drawer } onClick={ props.open }>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrawerToggle