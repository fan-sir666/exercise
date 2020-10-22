<template>
  <div class="container">
    <div class="cart">
      <cartTitle :uname="uname"></cartTitle>
      <cartMain :list="list" @change-num="changeNum"></cartMain>
      <cartTotal :list="list"></cartTotal>
    </div>
  </div>
</template>

<script>
import cartTitle from "./components/cartTitle.vue";
import cartMain from "./components/cartMain.vue";
import cartTotal from "./components/cartTotal.vue";
export default {
  name: "App",
  data() {
    return {
      uname: "张三",
      list: [
        {
          id: 1,
          name: "电视",
          jge: 1000,
          num: 1,
          img: require("./assets/a.jpg")
        },
        {
          id: 2,
          name: "沙发",
          jge: 2000,
          num: 2,
          img: require("./assets/b.jpg")
        },
        {
          id: 3,
          name: "吹风机",
          jge: 1000,
          num: 1,
          img: require("./assets/c.jpg")
        },
        {
          id: 4,
          name: "手机",
          jge: 1000,
          num: 1,
          img: require("./assets/d.jpg")
        },
        {
          id: 5,
          name: "相机",
          jge: 1000,
          num: 1,
          img: require("./assets/e.jpg")
        }
      ]
    };
  },
  methods: {
    changeNum(val) {
      if (val.type == "change") {
        this.list.some(item => {
          if (item.id == val.id) {
            item.num = val.num;
            return true;
          }
        });
      } else if (val.type == "add") {
        this.list.some(item => {
          if (item.id == val.id) {
            item.num++;
            return true;
          }
        });
      } else if (val.type == "sub") {
        this.list.some(item => {
          if (item.id == val.id) {
            item.num--;
            item.num = item.num < 0 ? 0 : item.num;
            return true;
          }
        });
      } else if (val.type == "del") {
        let index = this.list.findIndex(item => item.id == val.id);
        this.list.splice(index, 1);
      }
    }
  },
  components: {
    cartTitle,
    cartMain,
    cartTotal
  }
};
</script>

<style>
.container .cart {
  width: 300px;
  /*background-color: lightgreen;*/
  margin: auto;
}
</style>
