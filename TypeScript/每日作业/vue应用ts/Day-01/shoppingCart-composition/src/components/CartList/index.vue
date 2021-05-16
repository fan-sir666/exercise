<template>
  <div>
    <div class="item" v-for="item in list" :key="item.id">
      <img :src="item.img" />
      <div class="name">{{ item.name }}</div>
      <div class="change">
        <a href="" @click.prevent="sub(item.id)">－</a>
        <input
          type="text"
          class="num"
          :value="item.num"
          @change="change(item.id, $event)"
        />
        <a href="" @click.prevent="add(item.id)">＋</a>
      </div>
      <div class="del" @click.prevent="del(item.id)">×</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    // 数量++
    function add(id) {
      emit("change-num", {
        id: id,
        type: "add",
      });
    }
    // 数量++
    function sub(id) {
      emit("change-num", {
        id: id,
        type: "sub",
      });
    }
    // 输入改变数量
    function change(id, e) {
      // 非负处理
      if (e.target.value < 0) e.target.value = 0;
      emit("change-num", {
        id: id,
        type: "change",
        num: e.target.value,
      });
    }
    // 删除
    function del(id) {
      emit("change-num", {
        id: id,
        type: "del",
      });
    }

    return {
      add,
      sub,
      change,
      del
    };
  },
});
</script>

<style scoped>
</style>
