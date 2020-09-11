import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

function reducer(state = 0) {
  return {
    a: 1
  }
}
const store = createStore(combineReducers({a: reducer}), applyMiddleware(thunk))

export default store