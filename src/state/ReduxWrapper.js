import React from "react"
import { Provider } from "react-redux"
import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from "redux"
import rootReducer from "."

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers()
//applyMiddleware(...middleware)
// other store enhancers if any

const createStore = () => reduxCreateStore(rootReducer, enhancer)

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
