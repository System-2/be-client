import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import BlockTable from './Table/BlockTable'
import Text from '../containers/Text'



const App = () => (
    <div>
        <Header/>
        <SideBar/>
    <h1>
        <Text text_ru={'Привет'} text_en={'Hi'} />
    </h1>
        <BlockTable/>
    </div>
)

export default App
