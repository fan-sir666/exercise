const state = () => {
    return {
        list: []
    }
}
const mutations = {
    updateList(state, payload) {
        state.list = payload
    }
}

export default {
    state,
    mutations
}