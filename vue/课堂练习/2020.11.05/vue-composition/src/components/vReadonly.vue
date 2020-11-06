<template>
  <div></div>
</template>

<script>
import {reactive, readonly} from "vue";
export default {
  setup() {
    let obj = reactive({
      name: "张三",
      age: 22
    });
    // readonly 把数据变为只读 不可进行值的修改
    let newobj = readonly(obj);
    newobj.name = "李四";
    console.log(newobj);
  }
};
</script>

<style>
</style>