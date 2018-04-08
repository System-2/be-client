import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
    button: {
        color: 'white',
        background: '#626968',
        borderWidth: 0,
        cursor: 'pointer',
        fontSize: 20,
        transition: 'color 0.4s ease',
        '&:disabled':{
            color: '#949494',
        },
        '&:active':{
            outline: 'none',
        },
        '&:focus':{
            outline: 'none',
        },
        '@media screen and (max-width:  1224px)':{
            fontSize: 20,
        },
    },

}

const LangButton = ({ active, children, onClick, classes }) => (
    <button
        className={classes.button}
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
)

LangButton.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default injectSheet(styles)(LangButton)