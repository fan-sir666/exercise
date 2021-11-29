<template>
  <div class="container">
    <!-- 顶部框模块 -->
    <div class="form-group">
      <div class="input-group">
        <h4>品牌管理</h4>
      </div>
    </div>

    <!-- 数据表格 -->
    <table class="table table-bordered table-hover mt-2">
      <thead>
        <tr>
          <th>编号</th>
          <th>资产名称</th>
          <th>价格</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <!-- 如果价格超过100，就有red这个类 -->
          <td>{{ item.price }}</td>
          <td>{{ item.time }}</td>
          <td><a href="#" @click="delHandler(item.id)">删除</a></td>
        </tr>
        <!-- 4. 统计得有数据才显示 -->
        <tr v-if="list.length !== 0" style="background-color: #eee">
          <td>统计:</td>
          <td colspan="2">总价钱为:{{ allPrice }}</td>
          <td colspan="2">平均价:{{ avgPrice }}</td>
        </tr>
      </tbody>
      <tfoot v-show="list.length === 0">
        <tr>
          <td colspan="5" style="text-align: center">暂无数据</td>
        </tr>
      </tfoot>
    </table>

    <!-- 添加资产 -->
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="资产名称"
            v-model="name"
          />
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div class="form-group">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="价格"
            v-model.number="price"
          />
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <button class="btn btn-primary" @click.prevent="addHandler">
        添加资产
      </button>
    </form>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
    // 名称
    const name = ref("");
    // 价格
    const price = ref(0);
    // 品牌列表
    const list = ref(JSON.parse(localStorage.getItem("pList")) || []);

    //#region 添加
    const addHandler = () => {
      if (name.value.trim().length === 0 || price.value === 0) {
        return alert("输入内容不能为空!!!");
      }
      list.value.push({
        id:
          list.value.length === 0
            ? 100
            : list.value[list.value.length - 1].id + 1,
        name: name.value,
        price: price.value,
        time: new Date(),
      });
      name.value = "";
      price.value = "";
    };
    //#endregion
    //#region 删除
    const delHandler = (id) => {
      list.value = list.value.filter((item) => item.id !== id);
    };
    //#endregion

    //#region 总价
    const allPrice = computed(() => {
      return list.value.reduce((sum, item) => {
        return (sum += item.price);
      }, 0);
    });
    const avgPrice = computed(() => {
      return (allPrice.value / list.value.length).toFixed(2);
    });
    //#endregion
    //#region 将列表数据存入本地
    watch(list.value, (curVal) => {
      localStorage.setItem("pList", JSON.stringify(curVal));
    });
    //#endregion
    return { name, price, list, allPrice, avgPrice, addHandler, delHandler };
  },
};
</script>

<style>
.red {
  color: red;
  font-weight: 900;
}
</style>
