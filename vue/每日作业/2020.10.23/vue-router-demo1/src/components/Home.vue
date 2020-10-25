<template>
  <div>
    <h2>我是Home组件</h2>
    <button @click="gqian">前往关于</button>
  </div>
</template>

<script>
export default {
  methods:{
    gqian(){
      this.$router.push('/about')
    }
  }
};
</script>

<style></style>
