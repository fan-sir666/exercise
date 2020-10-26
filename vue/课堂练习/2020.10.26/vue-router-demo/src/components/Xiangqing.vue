<template>
  <div>
      <h3>详情页面,用户ID{{id}}</h3>
      <button @click.prevent="fBack">返回</button>
  </div>
</template>

<script>
export default {
    props:["id"],
    methods:{
        fBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>