<template>
  <div @click="jShao">点我介绍:{{ jshao }}</div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    let jshao = ref("");
    let str = ref("100万元");
    let obj = reactive({
      name: "张三",
      age: 20
    });
    let arr = reactive(["英语","数学"]);
    function jShao() {
      // console.log(11111);
      //   console.log(`我叫${obj.name},今年${obj.age}岁,年收入${str.value}`);
      jshao.value = `我叫${obj.name},今年${obj.age}岁,年收入${str.value},擅长学课${arr[0]}`;
    }

    // 打印基本声明  变量.value   复杂  变量.属性名
    // console.log(str.value, obj);

    return {
      str,
      obj,
      jShao,
      jshao,
      arr
    };
  }
};
</script>

<style>
div {
  font-size: 48px;
}
</style>