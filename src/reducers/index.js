import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { languageReducer } from "./languageReducer"
import { canvasReducer } from "./canvasReduser"
import { blockReducer } from "./blockReduser"


const rootReducer = combineReducers(
    {
        block: blockReducer,
        menu: canvasReducer,
        lang: languageReducer,
        router: routerReducer,
    }
)

export default rootReducer

