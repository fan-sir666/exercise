<template>
  <div>
    <MyHeader title="tabbar案例"></MyHeader>
    <div class="main">
      <component :is="comName"></component>
    </div>
    <MyTabBar :list="tabList" @changePage="tabPage"></MyTabBar>
  </div>
</template>

<script>
// 头部 底部组件
import MyHeader from "./components/MyHeader";
import MyTabBar from "./components/MyTabBar";

// 动态切换组件
import MyGoodsList from "./views/MyGoodsList";
import MyGoodsSearch from "./views/MyGoodsSearch";
import MyUserInfo from "./views/MyUserInfo";
export default {
  data() {
    return {
      comName: "MyGoodsList", // 默认显示的组件
      tabList: [
        // 底部导航的数据
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods: {
    tabPage(showName) {
      this.comName = showName;
    },
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
