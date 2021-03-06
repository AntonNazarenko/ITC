import React from 'react'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { configureStore } from './redux'

const config = {
    development: true
  }
  
  const optionalReducers = {
    router: routerReducer,
  }
  
  const optionalMiddleware = [
    routerMiddleware(),
  ]
  
  export const store = configureStore(
    config,
    optionalReducers,
    optionalMiddleware,
  )
  
  window._store = store
  
  export default class StoreWrapper extends React.Component {
    render() {
      const { children } = this.props
      return (
        <Provider store={ store }>
          { children }
        </Provider>
      )
    }
  }