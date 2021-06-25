import {createStore,applyMiddleware} from 'redux'
import zjj from 'redux-thunk'
import reducer from './reducer'
const xxx = applyMiddleware(zjj)
const store = createStore(reducer,xxx)
export default store
