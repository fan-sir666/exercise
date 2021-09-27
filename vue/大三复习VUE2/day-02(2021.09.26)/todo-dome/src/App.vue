<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader :list="list" @handleData="addFn"></TodoHeader>
    <TodoMain :list="showArr" @handleData="delFn"></TodoMain>
    <TodoFooter
      :arr="showArr"
      @changeType="tabFn"
      @clear="clearFn"
    ></TodoFooter>
  </section>
</template>

<script>
// 导入相关样式
import "./styles/base.css";
import "./styles/index.css";

// 导入相关组件
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    return {
      // list: [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 201, name: "睡觉", isDone: false },
      //   { id: 103, name: "打豆豆", isDone: true },
      // ],
      // 获取本地数据
      list: JSON.parse(localStorage.getItem("todoList")) || [],
      // 切换任务状态
      getSel: "all",
    };
  },
  methods: {
    //#region 添加
    addFn(name) {
      this.list.push({
        id:
          this.list.length === 0 ? 100 : this.list[this.list.length - 1].id + 1,
        name: name,
        isDone: false,
      });
    },
    //#endregion
    //#region 删除
    delFn(id) {
      this.list = this.list.filter((item) => item.id != id);
    },
    //#endregion
    //#region 任务切换
    tabFn(status) {
      this.getSel = status;
    },
    //#endregion
    //#region 清除已完成
    clearFn() {
      this.list = this.list.filter((item) => item.isDone != true);
    },
    //#endregion
  },
  watch: {
    list: {
      handler() {
        // 将数据存入本地
        localStorage.setItem("todoList", JSON.stringify(this.list));
      },
    },
  },
  computed: {
    // 任务状态数组
    showArr() {
      if (this.getSel === "yes") {
        return this.list.filter((item) => item.isDone === true);
      } else if (this.getSel === "no") {
        return this.list.filter((item) => item.isDone === false);
      } else {
        return this.list;
      }
    },
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style></style>
