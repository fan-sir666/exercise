<template>
  <div>
    <h1>首页</h1>
    <!-- <ul>
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul> -->
    <list :list="list"></list>
  </div>
</template>

<script>
import {mapState} from "vuex"
import List from '../components/List.vue';
export default {
  components: { List },

  /* fetch:
  在渲染页面前填充应用的状态树（store）数据
  它不会设置组件的数据 ,返回一个 Promise
  */
  async fetch({ app, store }) {
    const {
      data: { data: list }
    } = await app.$api.getTopics("/topics");
    store.commit('updateList',list)
  },
  computed:{
    ...mapState(['list'])
  }
};
</script>
