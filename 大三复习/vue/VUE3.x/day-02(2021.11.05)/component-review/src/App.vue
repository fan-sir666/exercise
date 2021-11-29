<template>
  <!-- 动态组件 && 组件缓存 -->
  <!-- <dtcomponent></dtcomponent> -->

  <!-- 组件插槽 -->
  <componentSlot></componentSlot>
</template>

<script>
import dtcomponent from "./views/dtcomponent.vue";
import componentSlot from "./views/componentSlot.vue";
export default {
  components: { dtcomponent, componentSlot },
};
</script>

<style></style>
