import React from 'react'

import Aux from '../../hoc/Auxillary/Auxillary'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = props => (
    <Aux>
        <div>
            <Toolbar /> SideDrawer, Modal
        </div>
        <div> { props.children } </div>
    </Aux>
)

export default Layout