import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      // 周期
      zhqi: "第一周",
      // 题号
      itemHao: 1,
      // 提交答案
      itemtj: [],
      // 习题
      itemissue: []
    };
  },
  mutations: {
    // 初始化数据
    initData(state, res) {
      state.itemissue = res.data;
    },
    // 记录答题Id
    bcId(state, id) {
      state.itemtj.push(id);
    },
    // 题号++
    addTh(state) {
      state.itemHao++;
    },
    clearData(state) {
      state.itemtj = [];
      state.itemHao = 1;
    }
  },
  actions: {
    // 获取数据
    async getData(context) {
      let res = await axios.get("/data/question.json");
      // console.log(res);
      context.commit("initData", res);
    },
    // 提交答案
    addTijiao(context, id) {
      context.commit("bcId", id);
      if (context.state.itemHao < context.state.itemissue.length) {
        context.commit("addTh");
      }
      // console.log(context.state.itemtj);
    }
  },
  getters: {}
});
