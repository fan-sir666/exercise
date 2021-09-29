<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="task"
      @keydown.enter="handleAdd"
    />
  </header>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      task: "",
    };
  },
  methods: {
    //#region 添加功能
    handleAdd() {
      if (this.task.trim().length === 0) return alert("输入任务不能为空!!!");
      this.$emit("handleData", this.task);
      this.task = "";
    },
    //#endregion
  },
  computed: {
    isAll: {
      set(val) {
        this.list.forEach((item) => (item.isDone = val));
      },
      get() {
        return (
          this.list.length !== 0 &&
          this.list.every((item) => item.isDone === true)
        );
      },
    },
  },
};
</script>
