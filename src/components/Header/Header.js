import React from 'react'
import injectSheet from 'react-jss'

import Nav from '../../containers/Nav'
import LangPanel from './LangPanel'
import Label from './Label'
import NavPanel from './NavPanel'
import NavItem from './NavItem'
import SearchForm from './SearchForm'


const styles = {
    header: {
        background: '#626968',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 70,
        paddingLeft: '3%',
        paddingRight: '10%',
        '@media screen and (max-width:  1224px)':{
            height: 60,
        },
        '@media screen and (max-width:  546px)':{
            justifyContent: 'flex-end',
        },
    },
    title: {
        color: 'white',
        fontSize: 30,
        margin: 0,
        '@media screen and (max-width:  1224px)':{
            fontSize: 20,
        },
    },
}

const Header = ({classes}) => (
    <div>
        <div className={classes.header}>
            <Label>
                <p className={classes.title}>
                    BLOCK EXPLORER
                </p>
            </Label>
            <Nav>
                <NavPanel>
                    <NavItem path={'/'}>Home</NavItem>
                    <NavItem path={'/about'}>About</NavItem>
                </NavPanel>
                <SearchForm/>
                <LangPanel/>
            </Nav>
        </div>
    </div>
)

export default injectSheet(styles)(Header)