<template>
  <div class="hello">
    <h3 @click.prevent="cCan(name)">我叫{{ uname }}</h3>
    <button @click.prevent="asyncZage(1)">点击我就长大了</button>
    <p>我现在{{ age }}岁了</p>
    <button @click.prevent="addSru">点击增加我的收入</button>
    <p>我的收入{{sRu}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "王五"
    };
  },
  computed: {
    // 获取属性
    ...mapState(["uname", "age"]),
    // 获取计算后的属性
    ...mapGetters(["sRu"])
  },
  created() {
    this.xGai();
  },
  methods: {
    // 获取操作数据方法
    ...mapMutations(["xGai", "cCan","addSru"]),
    // 获取异步方法
    ...mapActions(["asyncZage"])
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
