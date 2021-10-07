<template>
  <div>
    <h1>axios的使用</h1>
    <ul>
      <li v-for="item in topics" :key="item.id">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const server = process.server ? 'axios服务端':'axios客户端'
    console.log(server);
    const {
      data: { data: topics }
    } = await app.$api.getTopics("/topics");
    return {
      topics
    };
  }
};
</script>

<style></style>
