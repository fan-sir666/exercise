<template>
  <div>
    <!-- 基本使用 -->
    <p>a + b = {{ sum }}</p>

    <!-- 计算属性 缓存:计算属性只有在依赖数据发生变化时才会被触发! -->
    <p>{{computedMsg}}</p>
    <p>{{computedMsg}}</p>
    <p>{{computedMsg}}</p>
    <p>{{handleMsg()}}</p>
    <p>{{handleMsg()}}</p>
    <p>{{handleMsg()}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
      msg: "来了老弟好嗨呦",
    };
  },
  methods: {
    handleMsg() {
      console.log("该函数执行了");
      return this.msg
        .split("")
        .join("|");
    },
  },
  // 计算属性
  computed: {
    sum() {
      return this.a + this.b;
    },
    computedMsg() {
      console.log("计算属性执行了");
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
  },
};
</script>

<style></style>
