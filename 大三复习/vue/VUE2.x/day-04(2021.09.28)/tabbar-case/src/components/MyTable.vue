<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <!-- <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th> -->
        <!-- 具名插槽 -->
        <slot name="header"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <!-- <td>{{ item.id }}</td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td>{{ item.tags }}</td>
        <td>
          <button class="btn btn-danger btn-sm">删除</button>
        </td> -->
        <!-- 作用域插槽 -->
        <slot name="body" :row="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
    border: 1px solid #ccc;
  }
}
</style>
