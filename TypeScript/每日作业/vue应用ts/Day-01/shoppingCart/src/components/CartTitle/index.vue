<template>
  <!-- title -->
  <div class="title">{{userName}}的商品</div>
</template>

<script lang="ts">
// defineComponent 使ts正确推断 Vue 组件选项中的类型
import { defineComponent } from "vue";

export default defineComponent({
  props:{
    userName:{
      type:String,
       required: true
    }
  }
});
</script>

<style>
</style>