<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in list"
      :key="index"
      :class="{ current: activeIndex === index }"
      @click="handleTab(index, item.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      //自定义校验规则
      validator(value) {
        if (value.length >= 2 && value.length <= 5) {
          return true;
        } else {
          console.log("tabbar项在[2,5]个之间");
          return false;
        }
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    handleTab(index,showName) {
      this.activeIndex = index;
      this.$emit("changePage",showName)
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
