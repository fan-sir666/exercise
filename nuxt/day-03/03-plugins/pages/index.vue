<template>
  <div>
    <h1>vant的使用</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  asyncData(){
    const server = process.server ? 'vant服务端':'vant客户端'
    console.log(server);
  }
};
</script>
