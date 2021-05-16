<template>
  <div>
    <router-link to="/calcPrice">第一题:计算选中水果总价</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/slide">第二题:图片的切换方式一</router-link>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/tabImg">第二题:图片的切换方式二</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/todoList">第三题:小目标</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/msgBoard">第四题留言板</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  }
})
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
