// 创建store 使用redux-thunk插件来处里异步请求,使得组件映射用dispatch(不再只能接受{},function也可以)
// redux的applyMiddleware 作为 redux-thunk 的载体 创建出的storeEnhancer 放在 createStore中
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'
const storeEnhancer = applyMiddleware(thunkMiddleware)
const store = createStore(reducer,storeEnhancer);
export default store;