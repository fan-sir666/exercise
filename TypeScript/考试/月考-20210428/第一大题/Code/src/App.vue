<template>
  <div class="content">
    <div class="content-price">
      总价: <span>{{ handleTotal }}</span>
    </div>
    <ul>
      <li
        :class="[item.status == true ? 'active' : '']"
        v-for="item in list"
        :key="item.id"
        @click="handleStatus(item.id)"
      >
        {{ item.name }}({{ item.price }}&yen;)
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import "./types/index";
export default defineComponent({
  setup() {
    //#region 数据
    // 在声明的时候 let list: Array<Ilist> =  reactive([]) 不直接放值 原因：后续操作值实则是覆盖了 list 不是操作原有数据 解决办法如下
    let list: Array<Ilist> = reactive({
      data: [
        {
          id: 1,
          name: "苹果",
          price: 10,
          status: true,
        },
        {
          id: 2,
          name: "梨子",
          price: 15,
          status: false,
        },
        {
          id: 3,
          name: "樱桃",
          price: 20,
          status: true,
        },
        {
          id: 4,
          name: "西瓜",
          price: 25,
          status: false,
        },
      ],
    });
    //#endregion

    //#region 改变状态
    function handleStatus(id) {
      list.forEach((item) => {
        if (item.id == id) {
          item.status = !item.status;
        }
      });
      // console.log(list);
    }
    //#endregion

    //#region 计算总价
    const handleTotal = computed(() => {
      // ref 声明的响应式数据 在赋值的时候需要 .value
      let sum = ref<number>(0);
      list.forEach((item) => {
        if (item.status) {
          sum.value += item.price;
        }
      });
      return sum;
    });
    //#endregion
    return {
      list,
      handleStatus,
      handleTotal,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  margin: 100px auto;
  width: 400px;
}
.content-price {
  margin-right: -200px;
  margin-bottom: 20px;
  font-size: 24px;
}
.content-price > span {
  color: red;
  font-weight: 700;
}
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  height: 50px;
  line-height: 50px;
  text-align: left;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
li:last-child {
  border-bottom: 1px solid #ccc;
}
li.active {
  background-color: red;
}
</style>
