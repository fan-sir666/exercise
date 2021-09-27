<template>
  <p @click="handleCz">EventBus跨组件传值</p>
</template>

<script>
import eventBus from "../EventBus/index";
export default {
  data() {
    return {
      msg: "同学们,好好学习天天向上!",
    };
  },
  methods: {
    handleCz() {
      eventBus.$emit("send", this.msg);
    },
  },
};
</script>

<style></style>
