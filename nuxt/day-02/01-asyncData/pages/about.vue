<template>
  <div>
      <h1>关于页</h1>
  </div>
</template>

<script>

export default {
    asyncData(context){
        console.log("执行了asyncData");
        console.log(process.server); // 客户端
        console.log(context);
    }
}
</script>

<style>

</style>