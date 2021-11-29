<template>
  <div>
    <ul v-for="item in list" :key="item.id">
      <li @click="Fn(item)">姓名:{{ item.name }}-----年龄:{{ item.age }}</li>
    </ul>
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from "./Grandson.vue"
export default {
  props: ["list"],
  methods: {
    Fn(obj) {
      this.$emit("ztof", obj);
    },
  },
  components:{
    Grandson
  }
};
</script>

<style></style>
