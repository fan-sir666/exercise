import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 导入ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 富文本编辑器
import CKEditor from '@ckeditor/ckeditor5-vue';

createApp(App)
    .use(router)
    .use(Antd)
    .use(CKEditor)
    .mount("#app");