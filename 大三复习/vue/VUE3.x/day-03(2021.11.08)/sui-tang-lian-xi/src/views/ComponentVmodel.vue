<template>
  <!-- 
      我们通过父子通信的方式可以实现组件的数据双向绑定 
        也可以使用 v-model:属性名的方式进行实现  
    -->
  <button @click="clickHandler">父组件按钮</button>
  <Test v-model:xxx="firstName" v-model:yyy="lastName"></Test>
</template>

<script>
import Test from "../components/Test.vue";
import { ref } from "vue";
export default {
  setup() {
    const firstName = ref("张三");
    const lastName = ref("李四");
    const clickHandler = () => {
      firstName.value = "王五";
      lastName.value = "赵六";
    };
    return { firstName, lastName, clickHandler };
  },
  components: {
    Test,
  },
};
</script>

<style></style>
