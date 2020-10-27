import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            name: "张三",
            ahao: "打篮球",
            shouRu: 100,
            age: 18
        };
    },
    mutations: {
        // 不传参
        bCcan(state) {
            state.name = "李四";
        },
        // 传参
        cCan(state, val) {
            state.ahao = val;
        },
        // 异步调用
        sRu(state, val) {
            state.shouRu += val;
        },
        // getters 的函数
        addAge(state) {
            state.age++
        }
    },
    actions: {
        asyncSru(context, val) {
            setInterval(function() {
                context.commit("sRu", val);
            }, 1000);
        }
    },
    getters: {
        xAge(state) {
            return state.age
        }
    }
});