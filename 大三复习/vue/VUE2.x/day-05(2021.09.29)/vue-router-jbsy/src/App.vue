<template>
  <div>
    <div>
      <router-link :to="{name:'home'}">首页</router-link
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/about">关于</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
