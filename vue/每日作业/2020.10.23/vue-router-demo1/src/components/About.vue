<template>
  <div>
    <h2>我是About组件,姓名:{{name}}id:{{id}}</h2>
    <router-link :to="{ name: 'gs' }">公司介绍</router-link>
    <router-link :to="{ name: 'lx' }">联系我们</router-link>
    <button @click="qJin">后退</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props:["id","name"],
  methods:{
    qJin(){
      // console.log(this.$router);
      this.$router.back();
    }
  }
};
</script>

<style></style>
