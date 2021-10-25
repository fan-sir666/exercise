<template>
  <div>
    <!-- 1.轮播图 -->
    <IndexCarousel :swipperList="swipperList" />
    <!-- 2.宫格 -->
    <IndexGridList :gridList="gridList" />
    <!-- 3.活动 -->
    <IndexActive />
    <!-- 4.品牌 -->
    <IndexBrand />
    <!-- 5.运动 -->
    <IndexSports :sports="sports"/>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // 轮播图
    const { swipperList } = await $axios.$get("/banners");
    // 宫格
    const { gridList } = await $axios.$get("/gridlist");
    // 运动专区
    let { sports } = await $axios.$get("/sports");
    return {
      swipperList,
      gridList,
      sports
    };
  }
};
</script>
