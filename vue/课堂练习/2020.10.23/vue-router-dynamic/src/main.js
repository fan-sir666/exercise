// 1.导入vue
import { createApp } from "vue";
// 2.导入组件
import App from "./App.vue";
// 3.导入路由
import routes from "./routes/index.js";
// 4.创建实例
const vm = createApp(App);
// 5.把路由挂载到vm实例上
vm.use(routes);
vm.mount("#app");
