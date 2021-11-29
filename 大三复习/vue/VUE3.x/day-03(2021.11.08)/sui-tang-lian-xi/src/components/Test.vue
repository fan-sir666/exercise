<template>
  <h2>{{ xxx }}---{{ yyy }}</h2>
  <button @click="changeData">Test组件按钮</button>
</template>

<script>
export default {
  props: ["xxx", "yyy"],
  setup(props, { emit }) {
    const changeData = () => {
      emit("update:xxx", "来了laodi");
      emit("update:yyy", "好嗨呦!!!");
    };
    return { changeData };
  },
};
</script>

<style></style>
