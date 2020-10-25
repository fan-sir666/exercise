<template>
  <div>
    <h2>判断指令</h2>
    <span v-if="uname == '张三'">欢迎{{ uname }}回家</span>
    <span v-else>您还尚未注册</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "张三"
    };
  }
};
</script>

<style scoped>
div {
  color: blue;
}
</style>
