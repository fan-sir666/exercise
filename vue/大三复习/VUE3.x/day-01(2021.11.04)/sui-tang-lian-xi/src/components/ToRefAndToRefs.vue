<template>
  <div>
    <h2>源数据:{{ person1 }}</h2>
    <h2>源数据:{{ person2 }}</h2>
    <button @click="clickHandler">按钮</button>
    {{ name }}-----{{ ah }}<br />
    {{ newPerson2 }}
  </div>
</template>

<script>
import { ref, reactive, toRef, toRefs } from "vue";
export default {
  setup() {
    const person1 = ref({ name: "张三", ah: { xb: "人妖" } });
    const person2 = reactive({ age: 20 });
    // 将整个person1 name ah 变为响应式
    const newPerson1 = toRefs(person1.value);
    const newPerson2 = toRef(person2, "age");
    const clickHandler = () => {
      person1.value.name = "李四";
      person1.value.ah.xb = "哈哈男";
      person2.age = 50;
    };
    return { person1, person2, ...newPerson1, newPerson2, clickHandler };
  },
};
</script>

<style></style>
