import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import MenuButton from './MenuButton/MenuButton'

const styles = {
    nav: {
        width: '100%',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media screen and (max-width: 768px)':{
            display: 'none',
        },
    },
    navMenuBtn:{
        display: 'none',
        '@media screen and (max-width: 768px)':{
            display: 'block',
        },
    },
    container: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-end'
    }
}
const Nav = ({classes, children, path}) => (
    <div className={classes.container}>
        <div className={classes.nav}>
            {children}
        </div>
        <div className={classes.navMenuBtn}>
            <MenuButton/>
        </div>
    </div>

)

Nav.propTypes = {
    children: PropTypes.node.isRequired,
}


export default injectSheet(styles)(Nav)