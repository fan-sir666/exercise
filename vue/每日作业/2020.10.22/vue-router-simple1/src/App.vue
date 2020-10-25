<template>
  <div>
    <!-- 导航 -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 导航对应内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
