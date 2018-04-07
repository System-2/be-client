import React from 'react'
import LangButton from '../../containers/LangButton'
import { LanguageTypes } from '../../actions/index'
import injectSheet from 'react-jss'

const styles = {
    langPanel:{
        flexBasis: '10%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '7%'
    }
}

const LangPanel = ({classes}) => (
    <div className={classes.langPanel}>
        <LangButton language={LanguageTypes.RUSSIAN}>RU</LangButton>
        <LangButton language={LanguageTypes.ENGLISH}>EN</LangButton>
    </div>
)


export default injectSheet(styles)(LangPanel)