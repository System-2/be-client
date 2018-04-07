import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Text from '../containers/Text'



const App = () => (
    <div>
        <Header/>
        <SideBar/>
    <h1>
        <Text text_ru={'Привет'} text_en={'Hi'} />
    </h1>
    </div>
)

export default App
