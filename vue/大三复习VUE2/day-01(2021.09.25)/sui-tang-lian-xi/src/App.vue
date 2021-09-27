<template>
  <div id="app">
    <!-- <A></A> -->
    <!-- <B></B> -->
    <!-- <C></C> -->
    <!-- <D></D> -->
    <!-- <E></E> -->
    <!-- <F></F> -->
    <Case></Case>
  </div>
</template>

<script>
// v-for检测不到 vm实例.$set解决视图的更新
// import A from "./components/01-v-for的更新监测.vue";

// 过滤器的使用
// import B from "./components/02-过滤器的使用.vue"

// 计算属性
// import C from "./components/03-计算属性.vue";
// import D from "./components/04-计算属性的完整写法.vue"
// import E from "./components/05-计算属性实现全选反选.vue"

// 侦听器
// import F from "./components/06-watch侦听器.vue"

// 品牌列表案列
import Case from './components/07-品牌列表案例.vue'

export default {
  components: {
    // A,
    // B,
    // C,
    // D,
    // E,
    // F,
    Case
  },
};
</script>

<style></style>
