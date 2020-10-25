<template>
  <div>
    <h2>我是About组件</h2>
    <p>id:{{ id }},姓名:{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style></style>
