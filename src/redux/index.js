/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createStore } from 'redux'

import reducer from './reducers'
import actions from './actions'

export function configureStore(
  options = {},
  optionalReducers = {},
  optionalMiddleware = null,
) {

  const store = createStore(
    reducer(optionalReducers),
    // eslint-disable-next-line no-underscore-dangle 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}

export default {
  configureStore,
  actions
}