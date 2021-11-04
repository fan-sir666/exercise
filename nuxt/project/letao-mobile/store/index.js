const state = () => {
    return {
        token: '', // 令牌
        userInfo: '' // 用户信息
    }
}

const mutations = {
    // 修改token
    updateToken(state, payload) {
        state.token = payload;
        console.log(state.token);
    },
    //  修改用户信息
    updateUserInfo(state, payload) {
        state.userInfo = payload;
        // console.log(state.userInfo);
    },
}

const actions = {
    // 持久化存储
    nuxtServerInit({ commit }, { req }) {
        let token = '';
        if (req.headers.cookie) {
            let parsed = require('cookieparser').parse(req.headers.cookie);
            // 设置token
            token = parsed.token;
        }
        commit('updateToken', token)
    }
}

export default {
    state,
    mutations,
    actions
}