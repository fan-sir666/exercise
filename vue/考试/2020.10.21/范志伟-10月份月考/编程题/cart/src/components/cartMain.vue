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
          @blur="change(item.id, $event)"
        />
        <a href="" @click.prevent="add(item.id)">＋</a>
      </div>
      <div class="del" @click.prevent="remove(item.id)">×</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartMain",
  props: ["list"],
  methods: {
    // 修改数量
    change(id, e) {
      if (e.target.value < 0) {
        e.target.value = 0;
      }
      this.$emit("change-num", {
        id: id,
        type: "change",
        num: e.target.value
      });
    },
    // 数量++
    add(id) {
      this.$emit("change-num", {
        id: id,
        type: "add"
      });
    },
    // 数量--
    sub(id) {
      this.$emit("change-num", {
        id: id,
        type: "sub"
      });
    },
    // 删除数据
    remove(id) {
      this.$emit("change-num", {
        id: id,
        type: "del"
      });
    }
  }
};
</script>

<style>
.container .item {
  height: 55px;
  line-height: 55px;
  position: relative;
  border-top: 1px solid #add8e6;
}

.container .item img {
  width: 45px;
  height: 45px;
  margin: 5px;
}

.container .item .name {
  position: absolute;
  width: 90px;
  top: 0;
  left: 55px;
  font-size: 16px;
}

.container .item .change {
  width: 100px;
  position: absolute;
  top: 0;
  right: 50px;
}

.container .item .change a {
  font-size: 20px;
  width: 30px;
  text-decoration: none;
  background-color: lightgray;
  vertical-align: middle;
}

.container .item .change .num {
  width: 40px;
  height: 25px;
}

.container .item .del {
  position: absolute;
  top: 0;
  right: 0px;
  width: 40px;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
  color: red;
}

.container .item .del:hover {
  background-color: orange;
}
</style>
