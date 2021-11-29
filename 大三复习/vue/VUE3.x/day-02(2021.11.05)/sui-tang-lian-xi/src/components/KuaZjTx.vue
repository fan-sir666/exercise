<template>
  <h1>跨组件通讯</h1>
  <p>我叫{{ userInfo.usernane }},今年{{ userInfo.age }}</p>
  <h5>{{ userInfo.jshao }}</h5>
  <button @click="changeAge(1)">快快长大</button>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    // 将提供的数据和方法 注入到当前组件
    const { userInfo, changeAge } = inject("user");
    return { userInfo, changeAge };
  },
};
</script>

<style></style>
