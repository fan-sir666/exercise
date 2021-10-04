<template>
  <div>
      <!-- <h3>路径参数:</h3>
      <NLink to="/100">直接路径传参</NLink>
      <br>
      <NLink to="/goods/200">路径传一个参</NLink>
      <br>
      <NLink to="/user/300/400">路径传两个参</NLink> -->

      <h3>查询参数:</h3>
      <NLink to="?xid=100">直接查询传参</NLink>
      {{$route.query.xid}}
      <br>
      <NLink to="/my?name=张三">查询传一个参</NLink>
      <br>
      <NLink to="/about/?name=li四&age=20">查询传两个参</NLink>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>