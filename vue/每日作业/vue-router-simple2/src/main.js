// 导入vue
import { createApp } from "vue";
// 导入组件
import App from "./App.vue";
// 导入路由
import routes from "./routes/index.js";
// 创建实例vm
let vm = createApp(App);
// 挂载路由
vm.use(routes);
vm.mount("#app");
