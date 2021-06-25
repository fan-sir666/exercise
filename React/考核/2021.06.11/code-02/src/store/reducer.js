import { GET_NUM } from "./actionTypes"

const initializeState = {
    num: 5
}
const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case GET_NUM:
            return {
                ...state,
                num: action.num
            }
        default:
            return state
    }
}

export default reducer