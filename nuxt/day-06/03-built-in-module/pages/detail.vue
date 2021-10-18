<template>
  <div>
    <h2>标题:{{ list.title }}</h2>
    <p v-html="list.content"></p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, query }) {
    let { data: list } = await $axios.$get(`/${query.id}`);
    return {
      list
    };
  }
};
</script>

<style></style>
