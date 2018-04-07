import React from 'react'
import Header from './Header/Header'
import Text from '../containers/Text'



const App = () => (
    <div>
        <Header/>
    <h1>
        <Text text_ru={'Привет'} text_en={'Hi'} />
    </h1>
    </div>
)

export default App
