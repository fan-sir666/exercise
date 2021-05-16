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
// defineComponent 使ts正确推断 Vue 组件选项中的类型
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // 数量++
    add(id) {
      this.$emit("change-num", {
        id: id,
        type: "add",
      });
    },
    // 数量--
    sub(id) {
      this.$emit("change-num", {
        id: id,
        type: "sub",
      });
    },
    // 输入数量
    change(id, e) {
      // 非负处理
      if (e.target.value < 0) e.target.value = 0;
      this.$emit("change-num", {
        id: id,
        type: "change",
        num: e.target.value,
      });
    },
    // 删除
    del(id) {
      this.$emit("change-num", {
        id: id,
        type: "del",
      });
    },
  },
});
</script>

<style>
</style>