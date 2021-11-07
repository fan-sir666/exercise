<template>
  <div>
    <!-- setup函数和响应式数据声明 -->
    <!-- <Xys></Xys> -->

    <!-- 计算属性 computed -->
    <!-- <Jssx></Jssx> -->
    <!-- <QuanAndFan></QuanAndFan> -->

    <!-- 侦听器 watch -->
    <!-- <ToRefAndToRefs></ToRefAndToRefs> -->

    <!-- 品牌应用案例  -->
    <PinPaiDemo></PinPaiDemo>
  </div>
</template>

<script>
import Xys from "./components/Xys.vue";
import Jssx from "./components/Jssx.vue";
import Ztq from "./components/Ztq.vue";
import ToRefAndToRefs from "./components/ToRefAndToRefs.vue";
import QuanAndFan from "./components/QuanAndFan.vue";
import PinPaiDemo from "./components/PinPaiDemo.vue";
export default {
  components: { Xys, Jssx, Ztq, ToRefAndToRefs, QuanAndFan, PinPaiDemo },
};
</script>
