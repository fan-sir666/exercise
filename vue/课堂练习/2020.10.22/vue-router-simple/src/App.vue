<template>
  <div class="route">
    <!-- to属性相当于href 添加链接 -->
    <router-link class="ljie" to="/">首页</router-link>
    <router-link class="ljie" to="/about">关于</router-link>
    <!-- 添加路由对应的视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
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
.ljie {
  margin: 0 20px;
}
</style>
