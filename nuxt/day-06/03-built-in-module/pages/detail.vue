<template>
  <div>
    <h2>标题:{{ list.title }}</h2>
    <p v-html="list.content"></p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, query }) {
    // 注意:$axios.$get || $axios.get 前者加了$ 可直接解构返回数据字段 ，后者
    // let { data: list } = await $axios.$get(`/${query.id}`);
    // let {
    //   data: { data: list }
    // } = await $axios.get(`/${query.id}`);
    let res = await $axios.get(`/${query.id}`);
    console.log(res);
    return {
      list
    };
  }
};
</script>

<style></style>
