<template>
  <div>
    <p>太阳伞公司,我们做伞是专业的,质量杠杠的</p>
    <button @click.prevent="fShou">返回首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    fShou() {
      // console.log(this.$router);
      //forward 前进 back回退 go(-1) 数字代表步进
      // this.$router.go(-1);
      this.$router.back();
    }
  }
};
</script>

<style></style>
