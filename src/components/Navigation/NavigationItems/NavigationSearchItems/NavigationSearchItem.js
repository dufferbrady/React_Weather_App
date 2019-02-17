import React from 'react'

import classes from './NavigationSearchItems.css'

const NavSearchItem = props => (
    <li className={ classes.NavigationSearchItem }>
        <input 
        className={ props.active ? classes.active : null }
        type="text" 
        placeholder="Search New City"/>
    </li>
)

export default NavSearchItem