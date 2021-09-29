<template>
  <div>
    <MyHeader title="购物车案例"></MyHeader>
    <div class="main">
      <MyGoods v-for="item in list" :key="item.id" :gItem="item"></MyGoods>
    </div>
    <MyFooter :list="list"></MyFooter>
  </div>
</template>

<script>
// 引入相关组件
import MyHeader from "./components/MyHeader";
import MyGoods from "./components/MyGoods";
import MyFooter from "./components/MyFooter";
export default {
  data() {
    return {
      // 商品数据
      list: JSON.parse(localStorage.getItem("carList")) || [],
    };
  },
  created() {
    // 获取商品数据
    this.$axios({
      url: "/api/cart",
    }).then((res) => {
      console.log(res);
      this.list = res.data.list;
    });
  },
  watch: {
    list: {
      handler(val) {
        localStorage.setItem("carList", JSON.stringify(val));
      },
      deep: true,
    },
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
