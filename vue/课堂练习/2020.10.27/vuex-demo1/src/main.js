import { createApp } from "vue";
import App from "./App.vue";
// 导入vuex
import store from "./store/index.js";
createApp(App)
  .use(store)
  .mount("#app");
