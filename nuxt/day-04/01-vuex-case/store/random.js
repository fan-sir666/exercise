export const state = () => {
    return {
        count: 0
    }
}


export const mutations = {
    updataCount(state, payload) {
        state.count = payload;
    }
}