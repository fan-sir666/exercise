<template>
  <!-- 防抖:  用户执行多次重复的点击,我们只执行最后一次 -->
  <button @click="onclickHandler">按钮</button>
</template>

<script>
// 函数封装
import debounce from "../utils/index.js";
export default {
  setup() {
    // let timer = null;
    // const onclickHandler = () => {
    //   clearTimeout(timer);
    //   timer = setTimeout(() => {
    //     console.log("button");
    //   }, 500);
    // };
    const onclickHandler = debounce((msg) => console.log(msg), 500);
    return { onclickHandler };
  },
};
</script>

<style></style>
