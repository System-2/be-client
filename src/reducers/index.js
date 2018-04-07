import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { languageReducer } from "./languageReducer"
import { canvasReducer } from "./canvasReduser"


const rootReducer = combineReducers(
    {
        menu: canvasReducer,
        lang: languageReducer,
        router: routerReducer,
    }
)

export default rootReducer

