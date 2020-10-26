import { createApp } from "vue";
import App from "./App.vue";
// 方式1
// import { add, sub } from "./assets/index/index";
// console.log(add());
// console.log(sub(3,2));

// 方式二
// import fa from "./assets/index/index";
// console.log(fa.add());
// console.log(fa.sub(4,2));


// 方式三
import * as fa from "./assets/index/index";
console.log(fa.add());
console.log(fa.sub(5,2));

createApp(App).mount("#app");