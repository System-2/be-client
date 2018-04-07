import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router'

import { store, persistor, history } from './configureStore'
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App'
import Page2 from './components/Page2'


render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={Page2} />
                </Switch>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
)