import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { languageReducer } from "./languageReducer"


const rootReducer = combineReducers(
    {
        lang: languageReducer,
        router: routerReducer,
    }
)

export default rootReducer

