import React, { Component } from 'react'

import Aux from '../../hoc/Auxillary/Auxillary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }

    toggleSideDrawerHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return(
            <Aux>
                <Toolbar showSideDrawer={ this.toggleSideDrawerHandler }/>
                <SideDrawer 
                open={ this.state.showSideDrawer }
                closed={ this.closeSideDrawerHandler }/>
                <div> { this.props.children } </div>
            </Aux>
        )
    }
}

export default Layout