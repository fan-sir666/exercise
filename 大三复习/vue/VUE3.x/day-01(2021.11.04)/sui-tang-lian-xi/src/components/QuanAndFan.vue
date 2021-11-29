<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isStatus" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    //   列表数据
    const list = reactive([
      {
        name: "猪八戒",
        c: false,
      },
      {
        name: "孙悟空",
        c: false,
      },
      {
        name: "唐僧",
        c: false,
      },
      {
        name: "白龙马",
        c: false,
      },
    ]);

    // 全选
    const isStatus = computed({
      set(val) {
        list.forEach((item) => (item.c = val));
      },
      get() {
        return list.every((item) => item.c === true);
      },
    });

    // 反选
    const btn = () => {
      list.forEach((item) => (item.c = !item.c));
    };
    return { list, isStatus, btn };
  },
};
</script>

<style></style>
