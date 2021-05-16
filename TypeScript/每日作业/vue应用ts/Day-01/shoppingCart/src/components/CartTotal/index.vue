<template>
  <div class="total">
    <span>总价：{{totalPrices}}</span>
    <button>结算</button>
  </div>
</template>

<script lang="ts">
// defineComponent 使ts正确推断 Vue 组件选项中的类型
import { defineComponent } from "vue";

export default defineComponent({
  props:{
    list:{
      type:Array,
      required:true
    }
  },
  computed:{
    // 总价
    totalPrices(){
      let sum = 0;
      this.list.forEach(ele => {
        sum += ele.num * ele.price
      });
      return sum;
    }
  }
});
</script>

<style>
</style>