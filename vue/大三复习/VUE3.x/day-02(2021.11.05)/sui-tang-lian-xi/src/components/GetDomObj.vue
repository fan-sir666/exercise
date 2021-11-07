<template>
  <div>
    <h1>ref获取单个、多个Dom对象</h1>
    <div ref="divRef">我是单个dom对象</div>
    <ul>
      <li
        :ref="(el) => (elmsRef[index] = el)"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
    <button @click="addList">按钮</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const divRef = ref(null);
    const list = ref(["苹果", "香蕉", "猕猴桃"]);
    const elmsRef = ref([]);
    const addList = () => {
      list.value.push(list.value.length);
    };
    onMounted(() => {
      // 单个
      console.log(divRef.value);
      // 多个
      console.log(elmsRef.value);
    });
    return { divRef, list, elmsRef, addList };
  },
};
</script>

<style></style>
