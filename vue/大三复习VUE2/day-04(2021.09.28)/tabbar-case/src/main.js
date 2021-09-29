import Vue from 'vue'
import App from './App.vue'
import "./assets/fonts/iconfont.css" // 引入字体图标css文件
import "bootstrap/dist/css/bootstrap.css"
// console.dir(Vue);
Vue.config.productionTip = false

import axios from "axios"
// 基准路径
axios.defaults.baseURL = "https://www.escook.cn";
// axios 挂载vue原型上
Vue.prototype.$axios = axios;

// 全局指令
// Vue.directive("focus", {
//     inserted(el) {
//         el.focus()
//     }
// })

new Vue({
    render: h => h(App)
}).$mount('#app')