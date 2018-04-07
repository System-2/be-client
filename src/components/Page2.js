import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Text from '../containers/Text'


const Page2 = () => (
    <div>
        <Header/>
        <SideBar/>
        <h1>
            <Text text_ru={'Вторая страница'} text_en={'2nd page'} />
        </h1>
    </div>
)

export default Page2