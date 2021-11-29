<template>
  <h1>服务端通信</h1>
  <div v-if="loadingFlag">loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="data && data.length > 0">
    <ul>
      <li v-for="item in data">{{ item.title }}</li>
    </ul>
  </div>
  <div v-else>暂无数据</div>
</template>

<script>
import { usePost } from "../js/usePost";
export default {
  setup() {
    const { data, loadingFlag, error, getList } = usePost();
    getList();
    // console.log(data.value);
    return { data, loadingFlag, error };
  },
};
</script>

<style></style>
