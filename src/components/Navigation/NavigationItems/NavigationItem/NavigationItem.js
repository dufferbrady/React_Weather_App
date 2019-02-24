import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css'

const NavigationItem = props => (
    <li className={ classes.NavigationItem }>
        <NavLink
        onClick={ props.closed }
        to={ props.link }
        href={ props.link }
        className={ props.active ? classes.active : null }>{ props.children }</NavLink>
    </li>
)

export default NavigationItem