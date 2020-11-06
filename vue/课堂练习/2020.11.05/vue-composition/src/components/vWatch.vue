<template>
  <div>
    <p @click="stop">我叫{{ obj.name }},我在成长{{ obj.age }}</p>
  </div>
</template>

<script>
import { reactive,watch } from "vue";
export default {
  setup() {
    let obj = reactive({
      name: "张三",
      age: 18
    });

   setInterval(() => {
      obj.age++;
    }, 1000);


    // 第一个参数 ：监听的属性 第二个参数:回调
    // 特点: 只有在监听的属性发生变化的时候才会执行回调
     let stop = watch(obj, () => {
      console.log(obj.age);
    });

    return {
      obj,
      stop
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