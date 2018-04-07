import React from 'react'
import injectSheet from 'react-jss'

const styles = {
    form: {
        display: 'block',
        width: '100%'
    },
    input: {
        fontSize: 20,
        height: 24,
        width: '100%',
        '&:focus':{
            outline: 'none'
        }
    }

}

const SearchForm = ({classes}) => (
    <form className={classes.form}>
        <input className={classes.input} type="text"></input>
    </form>
)

export default  injectSheet(styles)(SearchForm)