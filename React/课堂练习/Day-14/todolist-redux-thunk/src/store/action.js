import { GET_DATA, ADD_DATA, DEL_DATA, FIX_CHECKED, FIX_DATA, CLEAR_DATA } from "./actionTypes"

// 获取初始数据
const data = (data) => {
    return {
        type: GET_DATA,
        data: data
    }
}
export const getData = (dispatch) => {
    fetch(`http://localhost:80/getData`)
        .then(response => response.json())
        .then(json => dispatch(data(json)))
}

// 添加任务
export const addData = (task) => {
    return {
        type: ADD_DATA,
        task: task
    }
}

// 删除任务
export const delData = (id) => {
    return {
        type: DEL_DATA,
        id: id
    }
}

// 更改任务状态
export const fixChecked = (id) => {
    return {
        type: FIX_CHECKED,
        id: id
    }
}

// 切换任务
export const fixData = (key) => {
    return {
        type: FIX_DATA,
        key: key
    }
}

// 清除已完成任务
export const clearData = () => {
    return {
        type:CLEAR_DATA
    }
}