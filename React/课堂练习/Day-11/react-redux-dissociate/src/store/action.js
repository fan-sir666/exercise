// 导入标识
import { ADD_COUNT, MINUS_COUNT } from './constants'

// 集体导出
const addAction = () => {
    return {
        type: ADD_COUNT
    }
}


const minusAction = () => {
    return {
        type: MINUS_COUNT
    }
}

export {addAction,minusAction};