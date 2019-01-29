import React from 'react'

import Aux from '../../hoc/Auxillary/Auxillary'

const Layout = props => (
    <Aux>
        <div>ToolBar, SideDrawer, Modal</div>
        <div> { props.children } </div>
    </Aux>
)

export default Layout