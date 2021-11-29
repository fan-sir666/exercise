<template>
  <div>
    <h2 @click="clickHandler">我叫{{ person.name }},今年{{ person.age }}岁了</h2>
    <ul>
      <li v-for="(item, i) in arrList" :key="i">{{ item }}</li>
    </ul>
    <p>价格统统{{price}}元</p>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  // setup 组合API入口 返回值:对象 ，对象中的属性可直接在模板中使用
  setup() {
    /* 声明响应式数据
      ref : 即可声明基本数据类型也可声明引用数据类型
      reactive : 只能声明引用数据类型
    */
    const price = ref(100);
    const arrList = ref(["香蕉", "苹果", "梨子"]);
    const person = reactive({ name: "张三", age: 35 });
    const newPerson = {name:'李四',age :50}
    const clickHandler = ()=>{
      price.value = 60;
      arrList.value[0] = "哈密瓜";
      for(const key in newPerson){
        person[key] = newPerson[key]
      }
      // 使用ref声明的响应式数据 在修改的时候需要 xxx.value
      // 使用reactive声明的引用类型 整体赋值 需要使用遍历的方式
    }
    return { price, arrList, person ,clickHandler};
  },
};
</script>
