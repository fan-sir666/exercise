<template lang="html">
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    // 路由更新（即浏览器地址变化）时调用, 请在该方法内显示组件
    start() {
      this.loading = true;
    },
    // 路由更新完毕（即asyncData方法调用完成且页面加载完）时调用，请在该方法内隐藏组件
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
