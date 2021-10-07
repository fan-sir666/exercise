<template>
  <div>
    <h1>{{ count }}</h1>
    <p>{{ list }}</p>
    <span>{{title}}</span><br/>
    <button @click="handleNum">生成随机数</button>
    <button @click="gxin('nuxt不错,666!')">换提示语</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("msg", ["title"]),
    ...mapGetters(["count", "list"])
  },
  methods: {
    ...mapMutations({ gxin: "msg/updataTitle" }),
    handleNum() {
      // 随机数
      const random = this.getRandom(10, 100);
      // 同步修改
      this.$store.commit("random/updataCount", random);
      // 异步修改
      this.$store.dispatch("toList/asyncUpdataList", random);
    },
    // 生成随机数
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};
</script>
