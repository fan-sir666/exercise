<template>
  <Fcz :person="person" @changeData="changeData"></Fcz>
  <KuaZjTx></KuaZjTx>
</template>

<script>
import { ref } from "vue";
import Fcz from "./Fcz.vue";
import KuaZjTx from "./KuaZjTx.vue";
export default {
  components: { Fcz, KuaZjTx },
  setup() {
    const person = ref({ name: "张三", age: 20 });
    const changeData = (val) => {
      person.value.age += val;
    };
    return { person, changeData };
  },
};
</script>

<style></style>
