<template>
  <div>
    <input type="text" v-model="text" />
    <button @click="clickHandler1">button-ref</button>
    <button @click="clickHandler2">button-cative</button>
  </div>
</template>

<script>
import { ref, reactive, watch, watchEffect } from "vue";
export default {
  setup() {
    const text = ref("");
    const person = ref({ name: "张三", age: 20, ah: ["喝酒", "吃饭"] });
    const clickHandler1 = () => {
      person.value.name = "李四";
      person.value.ah[0] = "敲代码";
    };
    /* watch 监听
    watch(要监听的东西,callback)

    ref 声明的基本数据类型 要监听的东西不加.value

    ref 声明的引用数据类型 
            监听数据整体   加.value 
            监听数据整体下具体的属性 基本数据类型 () => 具体的属性
            监听数据整体下具体的属性 引用数据类型 具体的属性
    
    reactive 声明的引用数据类型
            监听数据整体  要监听的东西
            监听数据整体下具体的属性 基本数据类型 () => 具体的属性
            监听数据整体下具体的属性 引用数据类型 具体的属性
    */
    /* watch(text, (curVal, preVal) => {
      console.log(curVal);
      console.log(preVal);
    }); */
    /*  watch(person.value, (curVal, preVal) => {
      console.log(curVal);
      console.log(preVal);
    }); */

    /* watch(
      () => person.value.name,
      (curVal, preVal) => {
        console.log(curVal);
        console.log(preVal);
      }
    ); */

    /* watch(person.value.ah, (curVal, preVal) => {
      console.log(curVal);
      console.log(preVal);
    }); */

    const xm = reactive({ x: "范", m: "伟", list: { name: "周三" } });
    const clickHandler2 = () => {
      xm.x = "哈哈";
      xm.list.name = "来了老弟";
    };

    /* watch(xm, (curVal, preVal) => {
      console.log(curVal);
      console.log(preVal);
    }); */
    /* watch(
      () => xm.x,
      (curVal, preVal) => {
        console.log(curVal);
        console.log(preVal);
      }
    ); */

    /* watch(xm.list, (curVal, preVal) => {
      console.log(curVal);
      console.log(preVal);
    }); */

    // 监听多个值
    // watch([text, () => person.value.name,() => xm.x], (curVal, preVal) => {
    //   console.log(curVal);
    //   console.log(preVal);
    // });

    // 初始执行一次
    // watch(
    //   [text, () => person.value.name, () => xm.x],
    //   (curVal, preVal) => {
    //     console.log(curVal);
    //     console.log(preVal);
    //   },
    //   { immediate: true }
    // );

    // watchEffect 只关心数据的最新值，不关心旧值是什么，而且 watchEffect 默认会在初始时执行一次。
    // watchEffect(() => {
    //   console.log(text.value);
    //   console.log(person.value);
    //   console.log(person.value.name);
    //   console.log(xm);
    // });

    return { text, person, xm, clickHandler1, clickHandler2 };
  },
};
</script>

<style></style>
