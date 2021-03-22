import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// 自定义指令
const obj = {
    mounted(el, binding) {
        console.log(console.log(binding));
    }
}
//directive("zhiling", obj) 创建并挂载
createApp(App).directive("zhiling", obj).mount('#app')