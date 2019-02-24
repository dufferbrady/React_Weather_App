import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Aux from '../../../hoc/Auxillary/Auxillary'
import BackDrop from '../../UI/BackDrop/BackDrop'

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Closed]
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return(
        <Aux>
            <BackDrop 
            show={ props.open }
            clicked={ props.closed }/>
            <div className={ attachedClasses.join(' ') }>
                <nav>
                    <NavigationItems 
                    closed={ props.closed }
                    remove={ props.remove }/>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer