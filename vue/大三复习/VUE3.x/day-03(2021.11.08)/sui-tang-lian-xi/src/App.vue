<template>
  <!-- 表单的双向数据绑定 -->
  <!-- <InputVmodel></InputVmodel> -->
  <!-- 组件的双向数据绑定 -->
  <!-- <ComponentVmodel></ComponentVmodel> -->
  <!-- 防抖 -->
  <!-- <Debounce></Debounce> -->
  <!-- customRef组件 -->
  <ComponentCustomRef></ComponentCustomRef>
</template>

<script>
import InputVmodel from "./views/InputVmodel.vue";
import ComponentVmodel from "./views/ComponentVmodel.vue";
import Debounce from "./views/Debounce.vue";
import ComponentCustomRef from "./views/ComponentCustomRef.vue";
export default {
  components: { InputVmodel, ComponentVmodel, Debounce, ComponentCustomRef },
};
</script>

<style></style>
