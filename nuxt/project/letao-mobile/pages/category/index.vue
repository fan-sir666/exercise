<template>
  <div>
    <van-tree-select
      height="80vh"
      :items="oneCategoryList"
      :main-active-index.sync="active"
      @click-nav="handleLeft"
    >
      <template #content>
        <div
          class="category_sencond"
          v-for="item in twoCategoryList"
          :key="item.id"
        >
          <van-image width="4rem" :src="item.brandLogo" />
          <p>{{ item.brandName }}</p>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  async asyncData({ $api, query }) {
    // 默认0 获取路由active的参数 二级分类时 实现点谁获取谁的数据
    let active = query.active || 0;
    // 一级分类
    let { oneCategoryList = [] } = await $api.OneCategory();
    if(!oneCategoryList.length) return;
    // 处理渲染数据
    oneCategoryList = oneCategoryList.map(item => {
      return {
        text: item.categoryName,
        ...item
      };
    });
    // 二级分类
    const { twoCategoryList } = await $api.TwoCategory(
      oneCategoryList[active]["id"]
    );
    return {
      active,
      oneCategoryList,
      twoCategoryList
    };
  },
  methods: {
    async handleLeft(index) {
      // 点击一级分类 通过路由传参将索引传递
      this.$router.replace(`/category?active=${index}`);
      let id = this.oneCategoryList[index].id;
      const { twoCategoryList } = await this.$api.TwoCategory(id);
      // 将获取到的二级分类数据重新赋值
      this.twoCategoryList = twoCategoryList;
    }
  }
};
</script>

<style></style>
