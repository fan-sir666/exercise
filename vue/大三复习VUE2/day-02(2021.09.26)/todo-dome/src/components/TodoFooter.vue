<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters" @click="handleTab">
      <li>
        <a
          :class="{ selected: isSel === 'all' }"
          href="javascript:;"
          @click="isSel = 'all'"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'no' }"
          href="javascript:;"
          @click="isSel = 'no'"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'yes' }"
          href="javascript:;"
          @click="isSel = 'yes'"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="handleClear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ["arr"],
  data() {
    return {
      // 选中切换标识
      isSel: "all",
    };
  },
  methods: {
    // 底部任务状态切换
    handleTab() {
      this.$emit("changeType", this.isSel);
    },
    // 清除已完成
    handleClear() {
      this.$emit("clear");
    },
  },
  computed: {
    // 任务数量
    count() {
      return this.arr.length;
    },
  },
};
</script>
