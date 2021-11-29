<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="handleReverse">数组的翻转</button>
    <button @click="handleSlice">截取前三个</button>
    <button @click="handleUpdate">更新第一个元素的值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [10, 20, 30, 80, 100],
    };
  },
  methods: {
    //#region 数组翻转
    handleReverse() {
      this.arr.reverse(); // reverse该数组方法改变原数组
    },
    //#endregion
    //#region 数组截取
    handleSlice() {
      this.arr = this.arr.slice(0, 3); // slice该数组方法 返回截取后的数组 截取方式前闭后开 不改变原数组
    },
    //#endregion
    //#region 更新某一个值
    handleUpdate() {
      //   this.arr[0] = 1000;
      //   console.log(this.arr);

      // 问题:  this.arr[0] 该方式data中的数组改变了  但是视图没有改变 v-for监测不到
      // 解决方式: 实例.$set  参数: ①数据源 ②数据的哪一项 ③要修改的值

      this.$set(this.arr, 0, 1000);
    },
    //#endregion


    // 结论: 改变原数组的方法才能让v-for更新,如果vue监测不到数据变化,使用  覆盖数据(重新赋值)或this.$set达到视图的更修。
  },
};
</script>

<style></style>
