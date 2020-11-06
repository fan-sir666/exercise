<template>
  <div><p @click="ting">{{num}}</p></div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    let num = ref(1);

    // 监听 特点 : 不管监听的相关属性是否发生变化 一上来先执行一次 
    // 随后一但属性变化 继续执行 变化几次执行几次
    // 返回值 直接调用即可停止监听
    let ting = watchEffect(()=>{
        console.log(`跟踪变化：${num.value}`);  
    })

    setInterval(()=>{
        num.value++;
    },1000);

    return {
      num,
      ting
    };
  }
};
</script>

<style>
p {
    width: 500px;
    height: 400px;
    line-height: 400px;
    font-size: 40px;
    margin: 100px auto;
    border: 1px solid #cccccc;
}
</style>