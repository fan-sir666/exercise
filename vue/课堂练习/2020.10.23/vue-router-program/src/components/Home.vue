<template>
  <div>
    <h2>我是Home组件</h2>
    <button @click.prevent="tZhuan">去公司介绍</button>
  </div>
</template>

<script>
export default {
  methods:{
    tZhuan(){
      this.$router.push("/gongsi")
    }
  }
};
</script>

<style></style>
