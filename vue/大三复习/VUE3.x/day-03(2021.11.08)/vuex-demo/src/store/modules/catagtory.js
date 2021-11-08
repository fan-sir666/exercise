import axios from 'axios';
export default {
    namespaced: true,
    state() {
        return {
            catagtory: [],
            currentCatagtory: ''
        }
    },
    mutations: {
        updateCatagtory(state, payload) {
            state.catagtory = payload // 更新分类数据
        },
        updateCurrentCatagtory(state, payload) {
            state.currentCatagtory = payload
        }
    },
    actions: {
        async getCatagtory(context) {
            const channels = [
                { id: 1, name: '数据库' },
                { id: 2, name: '区块链' },
                { id: 3, name: 'linux' },
                { id: 4, name: '面试' },
                { id: 5, name: '设计' },
                { id: 6, name: '软件测试' },
            ]
            setTimeout(() => {
                context.commit('updateCatagtory', channels)
                context.commit('updateCurrentCatagtory', channels[0].id)
            }, 1000)

        }
    }
}