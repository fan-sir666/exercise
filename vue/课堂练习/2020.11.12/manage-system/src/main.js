import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 导入ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 导入axios
import axios from "axios";
// 创建 app 实例
const app = createApp(App);
// 配置基本路径
axios.defaults.baseURL = "http://www.wanlum.com:8888/api/private/v1/";
// 挂载axios
app.config.globalProperties.$axios = axios;

app
    .use(router)
    .use(Antd)
    .mount("#app");