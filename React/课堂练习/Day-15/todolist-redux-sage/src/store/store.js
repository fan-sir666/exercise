// 1. 引入redux
import {createStore,applyMiddleware} from 'redux'
// 2. 引入reducer和saga文件
import reducer from './reducer'
import sage from './saga'

// 3. 引入 redux-sage 创建 sageMiddleware中间键
import createSagaMiddleware  from 'redux-saga';
const sageMiddleware  = createSagaMiddleware();

// 4. 挂载到applyMiddleware载体上
const storeEnhance = applyMiddleware(sageMiddleware);
// 5. 创建store
const store = createStore(reducer,storeEnhance);
sageMiddleware.run(sage)

export default store;