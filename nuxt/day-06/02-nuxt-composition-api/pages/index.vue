<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const count = ref(0);
    const increment = () => count.value++;
    const decrement = () => count.value--;

    return {
      count,
      increment,
      decrement
    };
  }
});
</script>
