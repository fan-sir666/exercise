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
          <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
          <td>{{ item.time | formatDate }}</td>
          <td><a href="#" @click="handleDel(item.id)">删除</a></td>
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

      <button class="btn btn-primary" @click.prevent="handleAdd">
        添加资产
      </button>
    </form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: JSON.parse(localStorage.getItem("pList")) || [],
    };
  },
  methods: {
    //#region 添加功能
    handleAdd() {
      // 判断是否为空
      if (this.name.trim().length === 0 || this.price === 0) {
        alert("输入内容不能为空!!!");
        return;
      }
      // 添加数据
      this.list.push({
        id:
          this.list.length === 0 ? 100 : this.list[this.list.length - 1].id + 1,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
      // 清空输入框
      this.name = "";
      this.price = "";
    },
    //#endregion
    //#region 删除功能
    handleDel(id) {
      this.list = this.list.filter((item) => item.id != id);
    },
    //#endregion
  },
  computed: {
    // 总价格  reduce方法遍历数组对象求和  参数① 回调函数(sum,当前值) 参数② sum的初始值
    allPrice() {
      return this.list.reduce((sum, obj) => (sum += obj.price), 0);
    },
    avgPrice() {
      return (this.allPrice / this.list.length).toFixed(2); // toFixed 保留2位小数
    },
  },
  watch: {
    // 深度监听list 将list添加到本地
    list: {
      handler() {
        localStorage.setItem("pList", JSON.stringify(this.list));
      },
      deep: true,
    },
  },
  filters: {
    formatDate(val) {
      return moment(val).format("YYYY-MM-DD");
    },
  },
};
</script>

<style>
.red {
  color: red;
  font-weight: 900;
}
</style>
