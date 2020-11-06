import { createStore } from "vuex";
// 导入axios
import axios from "axios";
export default createStore({
    state() {
        return {
            // 活动周数
            level: "第一周",
            // 第几题
            itemNum: 1,
            // 答案
            answerid: [],
            questions: []
        };
    },
    mutations: {
        // 初始化数据
        initData(state, res) {
            state.questions = res.data;
        },
        // 记录提交的答案id
        remberId(state, id) {
            state.answerid.push(id);
        },
        // 题目标题++
        addItemNum(state) {
            state.itemNum++
        },
        clearData(state) {
            state.answerid = [];
            state.itemNum = 1;
        }
    },
    actions: {
        // 获取数据
        async getData(context) {
            let res = await axios.get("/data/question.json");
            context.commit("initData", res);
        },
        addNum(context, id) {
            // 调用记录答案id的方法
            context.commit("remberId", id);
            // 调用让itemNum++的方法
            if (context.state.itemNum < context.state.questions.length) {
                context.commit("addItemNum");
            }
            // console.log(context.state.answerid);
        }

    },
    getters: {}
});