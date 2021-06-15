import { ADD_DATA, CLEAR_DATA, DEL_DATA, FIX_STATUS, FIX_TASK, GET_DATA, SAVE_DATA } from "./actionTypes"

// 获取数据
export const getData = () => {
    return {
        type:GET_DATA
    }
}
// 保存请求到的数据
export const saveData = (data) => {
    return {
        type:SAVE_DATA,
        data:data
    }
}
// 添加任务
export const addData = (task) =>{
    return {
        type:ADD_DATA,
        task:task
    }
}
// 删除任务
export const delData = (id) =>{
    return{
        type:DEL_DATA,
        id:id
    }
}
// 修改任务状态
export const fixStatus = (id) =>{
    return {
        type:FIX_STATUS,
        id:id
    }
}
// 切换任务
export const fixTask = (key) =>{
    return {
        type:FIX_TASK,
        key:key
    }
}
// 清除已完成任务
export const clearData = ()=>{
    return {
        type:CLEAR_DATA
    }
}