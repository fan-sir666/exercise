// 导入vue
import { createApp } from "vue";
// 导入根组件
import App from "./App.vue";
// 导入数据共享文件
import store from "./store/index";
// 挂载数据共享
createApp(App)
  .use(store)
  .mount("#app");
