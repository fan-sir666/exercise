<template>
  <div>
    <!-- 头部 -->
    <header class="header">后台管理系统</header>
    <!-- 主体 -->
    <main class="main">
      <!-- 侧边栏 -->
      <aside class="content left">
        <ul>
          <li><router-link to="/users">用户管理</router-link></li>
          <li><router-link :to="{name:'qx'}">权限管理</router-link></li>
          <li>商品管理</li>
          <li>订单管理</li>
          <li>系统管理</li>
        </ul>
      </aside>
      <!-- 内容显示 -->
      <div class="content right">
        <router-view></router-view>
      </div>
    </main>
    <!-- 底部 -->
    <footer class="footer">版权信息</footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
#app {
  margin: 0;
  padding: 0px;
  height: 100%;
}
.header,
.footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #545c64;
  font-size: 24px;
  color: #fff;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  background-color: #888;
}
.main {
  display: flex;
  width: 100%;
  position: absolute;
  top: 50px;
  bottom: 40px;
}
.content {
  flex: 1;
}
.left {
  flex: 0 0 20%;
  background-color: #545c64;
}
.right {
  padding: 10px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul li {
  height: 45px;
  line-height: 45px;
  background-color: #a0a0a0;
  color: #fff;
  /* 小手 */
  cursor: pointer;
  border-bottom: 1px solid #ffffff;
}
ul li a {
  display: block;
  height: 100%;
  color: #fff;
  text-decoration: none;
}
</style>
