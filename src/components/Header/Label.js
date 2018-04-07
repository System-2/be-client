import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
    container:{
        flexBasis: '20%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 70
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