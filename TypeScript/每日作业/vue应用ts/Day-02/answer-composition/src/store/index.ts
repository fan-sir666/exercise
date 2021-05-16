import { createStore } from "vuex";
// 导入axios
import axios from "axios";
export default createStore({
    state() {
        return {
            // 周期
            zhouQi: "第一周",
            // 问题
            wenTi: []
        }
    },
    mutations: {
        // 初始化数据
        initData(state, res) {
            state.wenTi = res.data;
            console.log(state);
        },
        hah(){
            console.log("来了到底");
        }
    },
    actions: {
        // 获取数据
        async getData(context) {
            let res = await axios.get("/data/question.json");
            // console.log(res);
            // 调用初始化数据函数
            context.commit("initData", res);
        }
    }

})