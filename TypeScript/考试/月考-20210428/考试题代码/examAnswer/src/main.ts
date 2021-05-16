import { createApp } from 'vue'
import App from './App.vue'
// 导入路由 use 并挂载
import router from './routes'

createApp(App).use(router).mount('#app')
