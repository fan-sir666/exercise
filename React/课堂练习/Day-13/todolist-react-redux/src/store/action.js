import { ADD_DATA, CLEAR_DATA, DEL_DATA, FIX_DATA, FIX_KEY } from "./actionTypes"

// 添加任务
export const addData = (task) => {
    return {
        type: ADD_DATA,
        task: task
    }
}

// 删除任务
export const minusData = (id) => {
    return {
        type: DEL_DATA,
        id: id
    }
}

// 修改任务状态
export const fixData = (id) => {
    return {
        type: FIX_DATA,
        id: id
    }
}

// 切换任务
export const updataData = (key)=>{
    return {
        type:FIX_KEY,
        key:key
    }
}

// 清除已完成任务
export const clearData = ()=>{
    return {
        type:CLEAR_DATA
    }
}