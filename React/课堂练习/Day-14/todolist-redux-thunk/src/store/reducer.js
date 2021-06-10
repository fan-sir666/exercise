import { ADD_DATA, CLEAR_DATA, DEL_DATA, FIX_CHECKED, FIX_DATA, GET_DATA } from "./actionTypes"

// 初始化数据
const initializeState = {
    list: [{
        id: 1,
        info: "我周六去百盟物流园 打沙包",
        status: false
    }],
    activeKey: ''
}

// 创建reduce函数
const reduce = (state = initializeState, action) => {
    switch (action.type) {
        case GET_DATA:
            return action.data
        case ADD_DATA:
            return {
                ...state,
                list: [...state.list, action.task]
            }
        case DEL_DATA:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.id)
            }
        case FIX_CHECKED:
            return {
                ...state,
                list: state.list.map(item => {
                    if (item.id === action.id) {
                        return {...item, status: !item.status }
                    }
                    return item
                })
            }
        case FIX_DATA:
            return {
                ...state,
                activeKey: action.key
            }
        case CLEAR_DATA:
            return {
                ...state,
                list:state.list.filter(item => !item.status)
            }
        default:
            return state
    }
}

export default reduce