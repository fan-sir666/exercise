import { createStore } from "vuex";
// 导入axios
import axios from "axios";

export default createStore({
    state() {
        return {
            // 周期
            zhouQi: "第一周",
            // 题号
            tiHao: 1,
            // 保存提交答案id
            subId: [],
            // 问题
            wenTi: []
        }
    },
    mutations: {
        // 初始化数据
        initData(state, res) {
            state.wenTi = res.data;
        },
        // 保存id
        baoCunid(state, id) {
            state.subId.push(id);
        },
        // 题号++
        jiaTh(state) {
            state.tiHao++
        },
        // 清除
        clearData(state) {
            state.subId = [];
            state.tiHao = 1;
        }
    },
    actions: {
        // 获取数据
        async getData(context) {
            let res = await axios.get("/data/question.json");
            // console.log(res);
            // 调用初始化数据函数
            context.commit("initData", res);
        },
        // 获取提交id
        addId(content, id) {
            // 调用保存id方法
            content.commit("baoCunid", id);
            // 调用题号自增方法
            if (content.state.tiHao < content.state.wenTi.length) {
                content.commit("jiaTh");
            }
            // console.log(content.state.subId);
        }
    },
    getters: {}
});