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
    <IndexSports :sports="sports" />
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    // // 轮播图
    // const { swipperList } = await $api.IndexSwipper();
    // // 宫格
    // const { gridList } = await $api.IndexGridList();
    // // 运动专区
    // let { sports } = await $api.IndexSport();
    
    // Promise.all() 整体发起请求
    const [{swipperList = []},{ gridList = [] },{ sports = [] }] = await Promise.all([$api.IndexSwipper(),$api.IndexGridList(),$api.IndexSport()])
    return {
      swipperList,
      gridList,
      sports
    };
  }
};
</script>
