import React from 'react'
import injectSheet from 'react-jss'

import { NavLink } from 'react-router-dom'
import { OffCanvasMenu } from 'react-offcanvas'
import  OffCanvas  from '../../containers/OffCanvas'

const styles = {
    offcanvas: {
        background: '#bcbcbc',
        height: '100%',
        opacity: 0.5,
    }
}

const SideBar = ({classes, isMenuOpened}) => (
    <OffCanvas
        width={250}
        isMenuOpened={isMenuOpened}
        transitionDuration={300}
        position={"left"}
    >
            <OffCanvasMenu className={classes.offcanvas}>
                <p>Placeholder content.</p>
                <ul>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                    <NavLink to={'/about'}>
                        About
                    </NavLink>
                </ul>
            </OffCanvasMenu>
    </OffCanvas>
)

export default injectSheet(styles)(SideBar)