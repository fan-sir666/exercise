<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="{completed:item.isDone}" v-for="item in list" :key="item.id">
      <div class="view">
        <input :id="item.id" class="toggle" type="checkbox" v-model="item.isDone" />
        <label :for="item.id">{{ item.name }}</label>
        <button class="destroy" @click.prevent="handleDel(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    //#region 删除功能
    handleDel(id) {
      this.$emit("handleData", id);
    },
    //#endregion
  },
};
</script>
