import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import  axiosMiddleware   from 'redux-axios-middleware'
import axios from 'axios';
import createHistory from 'history/createBrowserHistory'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index'


const client = axios.create({
    baseURL:'https://api.opendota.com/api',
    responseType: 'json'
});


export const history = createHistory()

const middleware =  applyMiddleware(
    routerMiddleware(history),
    axiosMiddleware(client)
)

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export const persistor = persistStore(store)
