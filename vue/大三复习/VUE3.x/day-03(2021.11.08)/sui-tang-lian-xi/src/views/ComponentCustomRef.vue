<template>
  <!-- 创建具有自定义行为的响应式数据
       通过拦截响应式数据的读取和设置实现
       应用:防抖: 监听用户的连续操作, 最终只响应连续操作中的最后一次操作
   -->
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>

<script>
import { customRef } from "vue";
export default {
  setup() {
    const keyword = useDebounceRef("哈哈哈", 500);
    return { keyword };
  },
};
function useDebounceRef(initVal, delay) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        //  track 来监听  initVal的变化
        track();
        return initVal;
      },
      set(curVal) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          initVal = curVal;
          //   trigger 触发视图的更新
          trigger();
        }, delay);
      },
    };
  });
}
</script>

<style></style>
