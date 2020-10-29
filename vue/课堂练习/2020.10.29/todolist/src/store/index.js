import { createStore } from "vuex";
// 导入axios
import axios from "axios";

export default createStore({
    state() {
        return {
            list: '',
            viewKey: 'all'
        }
    },
    mutations: {
        // 初始化数据
        initData(state, res) {
            state.list = res.data;
        },
        // 添加数据
        addData(state, payload) {
            state.list.push({
                id: new Date().valueOf,
                info: payload,
                done: false
            })
        },
        // 删除数据
        removeData(state, payload) {
            // 找到对应id的索引
            let index = state.list.findIndex(item => item.id == payload);
            // 通过索引删除
            state.list.splice(index, 1)
        },
        // 修改数据中done的状态
        updateData(state, payload) {
            let index = state.list.findIndex(item => item.id == payload.id);
            state.list[index].done = payload.status;
            // console.log(state.list);
        },
        // 清除已完成任务
        clearData(state) {
            state.list = state.list.filter(item => item.done == false);
        },
        // 切换选项卡  改变viewKey
        qHuan(state, payload) {
            // console.log(payload);
            state.viewKey = payload;
        }
    },
    actions: {
        // 获取数据
        async getData(context) {
            let res = await axios.get("/list.json");
            // console.log(res);
            context.commit("initData", res)
        }
    },
    getters: {
        // 不同状态下的数据
        filterList(state) {
            if (state.viewKey == "all") {
                return state.list;
            };
            if (state.viewKey == "undone") {
                return state.list.filter(item => item.done == false);
            };
            if (state.viewKey == "done") {
                return state.list.filter(item => item.done == true);
            };

        }
    }
});