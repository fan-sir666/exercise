<template>
  <div id="app">
    <swiper></swiper>
  </div>
</template>

<script>
import swiper from "./components/Swiper"
export default {
  name: "App",
  components: {
    swiper
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
