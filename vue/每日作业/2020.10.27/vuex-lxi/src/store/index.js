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
        // 不传参
        xGai(state) {
            state.uname = "李四";
        },
        // 传参
        cCan(state, val) {
            state.uname = val;
        },
        zAge(state, val) {
            state.age += val;
        },
        // 计算用的方法
        addSru(state) {
            state.shouRu += 100
        }
    },
    actions: {
        asyncZage(content, val) {
            setInterval(function() {
                content.commit("zAge", val);
            }, 1000);
        }
    },
    getters: {
        sRu(state) {
            return state.shouRu
        }
    }
});