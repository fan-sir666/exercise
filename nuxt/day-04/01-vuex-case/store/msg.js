const state = () => {
    return {
        title: '来了老弟'
    }
}

const mutations = {
    updataTitle(state, payload) {
        state.title = payload
    }
}

export default {
    state,
    mutations
}