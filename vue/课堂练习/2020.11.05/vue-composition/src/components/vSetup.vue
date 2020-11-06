<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  props: ["msg"],
  setup(props, context) {
    // 该函数接收 props 作为其第一个参数
    console.log(props);
    // 第二个参数提供了一个上下文对象(context)，从原来 2.x 中 this 选择性地暴露了一些 property。
    console.log(context);
  }
};
</script>

<style>
</style>