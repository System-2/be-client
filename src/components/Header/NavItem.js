import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'

const styles = {
    container: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexBasis: '7%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 70,
        transition: 'background-color 0.4s ease',
        '&:hover': {
            background: '#949494'
        }
    }
}
const NavItem = ({classes, children, path}) => (
        <NavLink style={{textDecoration: 'none'}} exact to={path} className={classes.link} activeStyle={{
            background: '#949494'
        }}>
            <div className={classes.container}>
                {children}
            </div>
        </NavLink>

)

NavItem.propTypes = {
    path:  PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}


export default injectSheet(styles)(NavItem)