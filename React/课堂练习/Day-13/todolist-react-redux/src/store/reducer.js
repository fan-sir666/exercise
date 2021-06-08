import { ADD_DATA, CLEAR_DATA, DEL_DATA, FIX_DATA, FIX_KEY } from "./actionTypes";

// 初始化数据
const initializeState = {
    list: [{
            id: 1,
            info: "我周六去百盟物流园 打沙包",
            status: false
        },
        {
            id: 2,
            info: "我明天下午 去操场打篮球",
            status: true
        }
    ],
    activeKey: 'all'
}

// 创建reducer函数
const reducer = (state = initializeState, action) => {
    switch (action.type) {
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
        case FIX_DATA:
            return {
                ...state,
                list: state.list.map(item => {
                    if (item.id === action.id) {
                        return {...item, status: !item.status }
                    }
                    return item
                })
            }
        case FIX_KEY:
            return {
                ...state,
                activeKey: action.key
            }
        case CLEAR_DATA:
            return {
                ...state,
                list: state.list.filter(item => item.status !== true)
            }
        default:
            return state
    }
}

export default reducer;