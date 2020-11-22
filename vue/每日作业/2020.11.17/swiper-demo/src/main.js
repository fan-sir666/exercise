import Vue from "vue";
import App from "./App.vue";
// 导入axios
import axios from "axios";
// 配置axios
axios.defaults.baseURL = "http://web.banyuge.com"; // 基准路径
Vue.prototype.$Axios = axios;
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");