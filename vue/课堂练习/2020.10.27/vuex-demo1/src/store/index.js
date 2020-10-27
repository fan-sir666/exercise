// 导入vuex
import { createStore } from "vuex";

// 导出配置
export default createStore({
    state() {
        return {
            uname: "张三",
            age: 18,
            shouRu: 100
        };
    },
    mutations: {
        changeName(state, name) {
            state.uname = name
        },
        sRu(state, val) {
            state.shouRu += val
        },
        addAge(state) {
            state.age++
        }
    },
    actions: {
        asyncSru(context, val) {
            setInterval(function() {
                context.commit("sRu", val)
            }, 1000)
        }
    },
    getters: {
        zAge(state) {
            return state.age
        }
    }
});