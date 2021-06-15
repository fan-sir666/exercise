import { ADD_DATA, CLEAR_DATA, DEL_DATA, FIX_STATUS, FIX_TASK, SAVE_DATA } from "./actionTypes";

const initializeState = {
    list: [{
        id: 1,
        info: "我周六去百盟物流园 打沙包",
        status: false
    }],
    activeKey: ''
}

const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return state = action.data
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
        case FIX_STATUS:
            return {
                ...state,
                list: state.list.map(item => {
                    if (item.id === action.id) {
                        return {...item, status: !item.status }
                    }
                    return item
                })
            }
        case FIX_TASK:
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

export default reducer;