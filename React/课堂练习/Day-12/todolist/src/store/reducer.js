import { ADD_DATA, CLEAR_STATUS, DEL_DATA, FIX_DATA, FIX_KEY } from "./actionTypes";

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
        // 1.6 添加数据处理
        case ADD_DATA:
            return {
                ...state,
                list: [...state.list, action.task]
            }

            // 2.5 删除数据处理
        case DEL_DATA:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.id)
            }
            // 3.5 删除数据处理
        case FIX_DATA:
            return {
                ...state,
                list: state.list.map(item => {
                    if (item.id === action.id) {
                        return {...item, status: !item.status }
                    }
                    return item;
                })
            }
            // 4.4 切换任务数据处理
        case FIX_KEY:
            return {
                ...state,
                activeKey: action.key
            }
            // 5.4 清除已完成任务数据处理
        case CLEAR_STATUS:
            return {
                ...state,
                list: state.list.filter(item => !item.status)
            }
        default:
            return state;
    }
}

export default reducer;