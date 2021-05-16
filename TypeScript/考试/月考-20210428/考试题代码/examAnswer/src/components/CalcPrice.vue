<template>
  <div class="content">
    <div class="content-price">
      总价: <span>{{ totalPrice }}</span>
    </div>
    <ul>
      <!-- <li
        v-for="(item, index) in fruitList.data"
        :key="item.id"
        @click="
          () => {
            item.status = !item.status;
            handleStatus(index);
          }
        "
        :class="{ active: item.status }"
      >
        {{ item.name + "(" + item.price + "&yen;)" }}
      </li> -->
       <li
        v-for="(item, index) in fruitList"
        :key="item.id"
        @click="
          () => {
            item.status = !item.status;
            handleStatus(index);
          }
        "
        :class="{ active: item.status }"
      >
        {{ item.name + "(" + item.price + "&yen;)" }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import Axios from "axios";

export default defineComponent({
  setup() {
    // 定义数据
    type dataType = {
      id: number;
      name: string;
      price: number;
      status: boolean;
    };

    // 请求获取数据 并赋值
    let fruitList: Array<dataType> = reactive([]);
    Axios.get("/data.json").then((res) => {
    //  fruitList.splice(0, fruitList.length);
      fruitList.push(...res.data);
    });
    
    // let fruitList = reactive({data:[]});
    // Axios.get("/data.json").then((res) => {
    //   fruitList.data = res.data;
    // });

    //#region 计算总价
    const totalPrice = ref<number>(0);
    const handleStatus = (i) => {
      // 技巧 通过点击传索引  相当于手动遍历 直接判断状态  对应+= -= 取数据的价格即可
      if (fruitList[i].status) {
        totalPrice.value += fruitList[i].price;
      } else {
        totalPrice.value -= fruitList[i].price;
      }

      // 对象形式的复杂数据
      //  if (fruitList.data[i].status) {
      //   totalPrice.value += fruitList.data[i].price;
      // } else {
      //   totalPrice.value -= fruitList.data[i].price;
      // }
    };
    //#endregion
    return {
      fruitList,
      handleStatus,
      totalPrice,
    };
  },
});
</script>


<style scoped>
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
</style>>