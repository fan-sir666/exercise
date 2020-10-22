<template>
  <div class="title">{{ uname }}的商品</div>
</template>

<script>
export default {
  name: "cartTitle",
  props: ["uname"]
};
</script>

<style>
.container .title {
  background-color: lightblue;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /*color: #fff;*/
}
</style>
