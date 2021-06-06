// 导入标识
import { ADD_COUNT, MINUS_COUNT } from './constants'
// 2. 创建初始化数据
const initializeState = {
    count: 0
}

// 3. 构建reducer函数
const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return { count: state.count + 1 }

        case MINUS_COUNT:
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export default reducer