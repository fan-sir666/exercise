// 导入vue
import { createApp } from "vue";
// 导入组件
import App from "./App.vue";
// 导入路由
import routes from "./routes/index.js";
// 创建实例
let vm = createApp(App);
// 挂在路由
vm.use(routes);
vm.mount("#app");
