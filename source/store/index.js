import createLogger from 'redux-logger'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'

const PROD = process.env.NODE_ENV === 'production'

const loggerMiddleware = createLogger()

const middleware = PROD
  ? [thunkMiddleware]
  : [thunkMiddleware, loggerMiddleware]

const createStoreWithMiddleware = compose(
  applyMiddleware(
    ...middleware
  )
)(createStore)

export default (initialState = {}) => (
  createStoreWithMiddleware(reducer, initialState)
)
