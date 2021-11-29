import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

/* 
  全局过滤器
  语法: Vue.filter("过滤器名",值=>处理结果)

*/

Vue.filter('reverse', (val, s) => {
    return val.split("").reverse().join(s)
})

new Vue({
    render: h => h(App),
}).$mount('#app')