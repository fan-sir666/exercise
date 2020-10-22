import * as Vue from "vue";
// 导入组件
import App from "./App.vue";
// 导入axios包
import Axios from "axios";
// 设置基本路径
Axios.defaults.baseURL="http://localhost:3000";
// 创建vm 实例
let vm = Vue.createApp(App);
// 将axios挂载到vm实例上
vm.config.globalProperties.$axios = Axios;
vm.mount('#app');
