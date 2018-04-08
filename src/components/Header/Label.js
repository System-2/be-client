import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
    container:{
        flexBasis: '30%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 70,
        '@media screen and (max-width:  768px)':{
            flexBasis: '40%',
        },
        '@media screen and (max-width:  630px)':{
            flexBasis: '50%',
        },
        '@media screen and (max-width:  546px)':{
            display: 'none',
        },
    }
}

const Label = ({classes, children}) => (
    <div className={classes.container}>
        {children}
    </div>
)

Label.propTypes = {
    children: PropTypes.node.isRequired
}



export default injectSheet(styles)(Label)