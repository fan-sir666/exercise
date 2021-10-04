<template>
  <div id="app">
    {{ $store.state.count }}
    {{count}}
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "App",
  components: {},
  computed:{
    // count(){
    //   // 使用state中的数据
    //   return this.$store.state.count;
    // },
    ...mapState(['count'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
