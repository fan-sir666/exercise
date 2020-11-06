<template>
  <div>
    <h3 @click="fn">{{ newNum }}</h3>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    // 要被计算的属性
    let num = ref(1);
    // 打印次数
    let js = ref(1);
    let newNum = computed({
      // 获取 num 发生变化 newNum也跟着计算发生变化
      get() {
        console.log(`第${js.value++}次执行`);
        return num.value + 1;
      },
      // 设置
      set(val) {
        // console.log(val);// 8
        num.value = val - 4;
      }
    });
    function fn() {
      // num.value = 5;
      newNum.value = 8;
    }

    return {
      newNum,
      fn
    };
  }
};
</script>

<style>
</style>