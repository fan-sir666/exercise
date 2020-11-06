import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入样式
import "../public/css/common.scss";
import "../public/js/rem";
createApp(App)
    .use(store)
    .use(router)
    .mount("#app");