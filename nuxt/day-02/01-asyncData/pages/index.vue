<template>
  <div>
    <h1>首页</h1>
    <p>{{result?'服务端':'客户端'}}</p>
    <ul>
      <li v-for="item in topics" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const result = process.server; // true 服务端 | false 客户端
    const {
      data: { data: topics }
    } = await axios.get("https://cnodejs.org/api/v1/topics");
    return {
      result,
      topics
    };
  }
};
</script>
