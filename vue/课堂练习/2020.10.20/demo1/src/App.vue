<template>
  <div>
    <wbzl></wbzl>
    <pduanzl></pduanzl>
  </div>
</template>

<script>
import wbzl from "./components/wbzl.vue";
import pduanzl from "./components/pduanzl.vue";

export default {
  name: "App",
  components: {
    wbzl,
    pduanzl
  }
};
</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
