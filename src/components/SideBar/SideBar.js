import React from 'react'
import injectSheet from 'react-jss'

import { NavLink } from 'react-router-dom'
import { OffCanvasMenu } from 'react-offcanvas'
import  OffCanvas  from '../../containers/OffCanvas'
import  Label  from '../Header/Label'

const styles = {
    offcanvas: {
        background: '#bcbcbc',
        height: '100%',
    },
    navlink: {
        color: 'white',
        fontSize: 20,
    },
    title: {
        marginLeft: 20,
        color: 'black',
        fontSize: 20,
        margin: 0,
    },
}

const SideBar = ({classes, isMenuOpened}) => (
    <OffCanvas
        width={250}
        isMenuOpened={isMenuOpened}
        transitionDuration={300}
        position={"left"}
    >
            <OffCanvasMenu className={classes.offcanvas}>
                <Label>
                    <p className={classes.title}>
                        BLOCK EXPLORER
                    </p>
                </Label>
                <ul>
                    <p>
                    <NavLink className={classes.navlink} to={'/'}>
                        Home
                    </NavLink>
                    </p>
                    <p>
                    <NavLink className={classes.navlink} to={'/about'}>
                        About
                    </NavLink>
                    </p>
                </ul>
            </OffCanvasMenu>
    </OffCanvas>
)

export default injectSheet(styles)(SideBar)