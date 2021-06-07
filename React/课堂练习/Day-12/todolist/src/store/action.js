import { ADD_DATA, CLEAR_STATUS, DEL_DATA, FIX_DATA, FIX_KEY } from "./actionTypes"

// 1.5 添加任务
export const addData = (task) => {
    return {
        type: ADD_DATA,
        task: task
    }
}

// 2.4 删除任务
export const delData = (id) => {
    return {
        type: DEL_DATA,
        id:id
    }
}

// 3.4 更改任务状态
export const fixData = (id) => {
    return {
        type: FIX_DATA,
        id:id
    }
}

// 4.3 切换任务
export const fixKey = (key) => {
    return {
        type: FIX_KEY,
        key:key
    }
}


// 5.3 清除已完成任务
export const clearStatus = () => {
    return {
        type: CLEAR_STATUS,
    }
}