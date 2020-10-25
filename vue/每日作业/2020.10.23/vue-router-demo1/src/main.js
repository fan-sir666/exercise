// 导入vue
import { createApp } from "vue";
// 导入根组件
import App from "./App.vue";
// 导入路由文件
import router from "./routes/index";
// 创建vm实例
let vm = createApp(App);
// 挂载路由
vm.use(router);
vm.mount("#app");
