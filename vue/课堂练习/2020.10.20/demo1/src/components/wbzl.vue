<template>
  <div>
    <h1>文本指令</h1>
    <p>{{ msg1 }}</p>
    <p v-text="msg2"></p>
    <p v-html="msg3"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: "我是插值表达式",
      msg2: "<span>我是v-text指令</span>",
      msg3: "<span>我是v-html指令</span>"
    };
  }
};
</script>

<style scoped>
div {
  color: green;
}
</style>
