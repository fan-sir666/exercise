<template>
  <!-- 
      v-model 实现数据双向绑定，内部通过
      @update:modelValue="函数" 实现对数据的监听
    -->
  <input type="text" v-model="uName" @update:modelValue="changeData($event)" />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const uName = ref("张三");
    // 监听函数
    const changeData = (curVal) => {
      console.log(curVal);
    };
    return { uName, changeData };
  },
};
</script>

<style></style>
