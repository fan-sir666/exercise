<template>
  <div>
    <!-- 方式一接收参数 -->
    <!-- <h2>我是About组件,id:{{$route.params.id}}</h2> -->
    <!-- 方式二接收参数 -->
    <h2>我是About组件,id:{{id}}</h2>
    <!-- 方式三接收参数 -->
    <!-- <h2>我是About组件,id:{{ id }},姓名:{{ name }}</h2> -->
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style></style>
