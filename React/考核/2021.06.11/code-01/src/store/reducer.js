import { ADD_DATA, DEL_DATA } from "./actionTypes"

const initializeState = {
    list: [{
            id: 1,
            info: '经济打撒大dsada',
            status: false,
            ctime: 'xxxxx'
        },
        {
            id: 2,
            info: '经济打撒大',
            status: true,
            ctime: 'xxxxx'
        }
    ]
}
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
                list: state.list.map(item => {
                    if(item.id === action.item.id){
                        return {...item,status:!item.status,ctime:action.item.ctime}
                    }
                    return item
                })
            }

        default:
            return state
    }

}
export default reducer