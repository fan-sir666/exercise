<template>
  <div>
    <h1>我是首页</h1>
  </div>
</template>

<script>
export default {
  // 页面完成挂载的钩子
  mounted() {
    this.$nuxt.$nextTick(() => {
      // 开启
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>
