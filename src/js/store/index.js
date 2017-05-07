import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import quoteReducer from 'reducers/quote'
import { quoteEpic } from 'epics'

const epicMiddleware = createEpicMiddleware(quoteEpic)

const hasWindow = typeof window !== 'undefined'

const composeEnhancers
  = (hasWindow && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose

const store = createStore(quoteReducer, composeWithDevTools(
  applyMiddleware(epicMiddleware)
))

export default store
