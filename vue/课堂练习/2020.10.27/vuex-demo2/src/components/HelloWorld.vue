<template>
  <div class="hello">
    <h3 @click.prevent="aHao">{{ showSx }},我的爱好是{{ ahao }}</h3>
    <button @click.prevent="mXi">查看收入明细</button>
    <p>{{ shouRu }}</p>
    <button @click="zAge">我长大了</button>
    <p>{{dAge}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      aihao: "踢足球"
    };
  },
  computed: {
    // 获取属性 this.$store.state.属性名
    showSx() {
      return this.$store.state.name;
    },
    ...mapState(["ahao", "shouRu"]),
    // 获取getters属性 this.$store.getters.属性名
    dAge() {
      return this.$store.getters.xAge;
    }
  },
  created() {
    // 不传参
    this.$store.commit("bCcan");
  },
  methods: {
    // 传参同步函数通过commit触发
    aHao() {
      this.$store.commit("cCan", `${this.aihao}`);
    },
    // 传参异步函数通过dispatch触发
    mXi() {
      this.$store.dispatch("asyncSru", 2);
    },
    // getters 用的方法
    zAge() {
      this.$store.commit("addAge");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
