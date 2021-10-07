export const state = () => {
    return {
        list: [10, 20, 30]
    }
}


export const mutations = {
    updataList(state, payload) {
        state.list.push(payload)
    }
}

export const actions = {
    asyncUpdataList({ commit }, payload) {
        setTimeout(function() {
            commit('updataList', payload)
        }, 1000)
    }
}