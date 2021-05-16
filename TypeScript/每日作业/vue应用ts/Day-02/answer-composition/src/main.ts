import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'


// 样式导入
// import "../public/css/common.scss";
import "../public/js/rem.js";

createApp(App).use(router).use(store).mount('#app')
