const cookieparser = require('cookieparser');
export const state = () => {
    return {
        auth: ''
    }
}

export const mutations = {
    updateAuth(state, payload) {
        state.auth = payload
    }
}

export const actions = {
    // vuex信息数据持久化存储
    nuxtServerInit({ commit }, { req }) {
        let auth = '';
        if (req.headers.cookie) {
            auth = cookieparser.parse(req.headers.cookie).auth
        }
        commit('updateAuth', auth)
    }
}