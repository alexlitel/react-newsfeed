import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'

/**
 * configureStore
 * @desc Sets up store and applies middleware
 * @return { reduxStore } Returns app's Redux store
 */
/* eslint-disable */
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
		  rootReducer,
		  applyMiddleware(sagaMiddleware),

  )
  sagaMiddleware.run(rootSaga)
  return store
}

/* eslint-enable */
