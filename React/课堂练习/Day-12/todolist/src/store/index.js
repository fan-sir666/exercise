// 创建并导出store
import {createStore} from 'redux'
import reducer from './reducer.js'
const store = createStore(reducer)
export default store;