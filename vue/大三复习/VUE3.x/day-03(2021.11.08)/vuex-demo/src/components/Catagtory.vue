<template>
  <ul class="catagtory">
    <li
      v-for="item in catagtory"
      :key="item.id"
      @click="$store.commit('cate/updateCurrentCatagtory', item.id)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    // 发请求获取数据
    store.dispatch("cate/getCatagtory");
    return {
      catagtory: computed(() => store.getters.catagtory),
      currentCatagtroy: computed(() => store.getters.currentCatagtory),
    };
  },
};
</script>
