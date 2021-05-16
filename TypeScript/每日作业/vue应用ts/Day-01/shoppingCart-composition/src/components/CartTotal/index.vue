<template>
  <div class="total">
    <span>总价：{{totalPrices}}</span>
    <button>结算</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import "../../types/index"
export default defineComponent({
  props: {
    list:{
      type: Array,
      required: true,
    }
  },
 setup(props){
   const {list} = props;
   const totalPrices = computed(()=>{
      let sum = 0;
      list.forEach((ele:Iist) => {
        sum += ele.num * ele.price
      });
      return sum;
   })


   return{
     // 总价
     totalPrices
   }
 }
})
</script>

<style scoped>

</style>
