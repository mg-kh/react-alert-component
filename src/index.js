import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

/**
 * Root reducer
 */
import rootReducer from '@store/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
