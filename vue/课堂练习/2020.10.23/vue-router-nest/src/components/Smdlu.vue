<template>
  <div>
    <h2>扫我的二维码</h2>
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
  data(){
    return{
      img:require('../assets/1.png')
    }
  }
};
</script>

<style></style>
