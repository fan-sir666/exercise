<template>
  <div>
    <h1>我是子组件</h1>
    <p>我叫{{ person.name }},今年:{{ person.age }}岁了!!!</p>
    <button @click="clickHandler">点击我就长大了</button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["person"],
  setup(props, { emit }) {
    // person 转为计算属性的作用: 父组件数据变化时 来响应props的变化
    const person = computed(() => props.person);
    // emit 触发父组件自定义函数修改数据
    const clickHandler = () => {
      emit("changeData", 1);
    };
    return { person, clickHandler };
  },
};
</script>

<style></style>
