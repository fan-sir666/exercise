<template>
  <div>
    <!-- <h2>我是Home组件{{$route.query.name}}</h2> -->
    <h2>我是Home组件{{name}}</h2>
  </div>
</template>

<script>
export default {
  props:['name']
};
</script>

<style></style>
