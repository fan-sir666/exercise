// 1. 引入redux
import { createStore } from 'redux'

// 2. 创建初始化数据
const initializeState = {
    count: 0
}

// 3. 创建reducer函数
const reducer = (state = initializeState, action) => {
    // console.log(action);
    // 通过等值判断传过来的标识处理数据
    switch (action.type) {
        case "ADD_COUNT":
            return { count: state.count + 1 }
        case "MINUS_COUNT":
            return { count: state.count - 1 }
        default:
            return state;
    }
}

// 4. 创建store
const store = createStore(reducer)

// 5. 导出store
export default store;