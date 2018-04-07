import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
    navPanel:{
        height: 70,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '7%',
        marginRight: '7%',
    }
}

const NavPanel = ({classes, children}) => (
        <div className={classes.navPanel}>
            {children}
        </div>
)

NavPanel.propTypes = {
    children: PropTypes.node.isRequired
}


export default injectSheet(styles)(NavPanel)