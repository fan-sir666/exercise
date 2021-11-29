<template>
  <!-- app.vue是根组件 -->
  <div id="app">
    <Catagtory />
    <NewList />
  </div>
</template>
<script>
import Catagtory from "./components/Catagtory.vue";
import NewList from "./components/NewList.vue";

export default {
  components: {
    Catagtory,
    NewList,
  },
};
</script>
