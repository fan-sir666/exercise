import { ADD_DATA, DEL_DATA } from "./actionTypes"

// 添加
export const addData = (task) => {
    return {
        type: ADD_DATA,
        task: task
    }
}

// 删除
export const delData = (item) => {
    return {
        type: DEL_DATA,
        item: item
    }
}