<template>
  <a-layout style="width: 100%; height: 100%">
    <!-- 面包屑导航 -->
    <a-breadcrumb separator=">" style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: 900; font-size: 18px; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>商品分类</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <!-- 添加分类按钮 -->
      <a-row>
        <a-col>
          <a-button type="primary"> 添加分类 </a-button>
        </a-col>
      </a-row>
      <!-- 表格 -->
      <a-table
        :row-key="(record) => record.goods_id"
        :columns="table.columns"
        :data-source="table.data"
        bordered
        :pagination="false"
      >
      </a-table>
      <!-- 分页器 -->
      <a-pagination
        style="margin: 20px 0px"
        v-model:current="pagination.current"
        v-model:pageSize="pagination.pageSize"
        :total="pagination.total"
        :show-total="(total) => `共有${pagination.total} 条`"
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pagination.pageSizeOptions"
        @change="nextPage"
        show-quick-jumper
      />
    </a-card>
  </a-layout>
</template>

<script>
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
// 引入请求路径
import { goods } from "@/api";
export default {
  data() {
    return {
      table: {
        // 列信息
        columns: [
          {
            title: "#",
            key: "index",
            slots: { customRender: "index" },
          },
          {
            title: "分类名称",
            dataIndex: "cat_name",
          },
          {
            title: "是否有效",
            key: "cat_deleted",
            // slots: { customRender: "cat_deleted" },
          },
          {
            title: "排序",
            key: "cat_deleted",
            // slots: { customRender: "cat_deleted" },
          },
        ],
        // 数据源
        data: [],
      },
      pagination: {
        // 当前页
        current: 1,
        total: 0,
        pageSize: 10,
        // 分页下拉选项
        pageSizeOptions: ["5", "10", "15", "20"],
      },
    };
  },
  created() {
    // 调用获取用户数据的方法
    this.getCategories();
  },
  methods: {
    // 获取用户数据
    getCategories() {
      httpGet(goods.getCategories, {
        pagenum: this.pagination.current,
        pagesize: this.pagination.pageSize,
      })
        .then((response) => {
          console.log(response);
          let { meta, data } = response;
          // 如果后台返回的状态码为200,则代表请求成
          if (meta.status == 200) {
            this.table.data = data.result;
            // console.log(this.tableData);
            // 当前页
            this.pagination.current = Number(data.pagenum);
            // 数据总量
            this.pagination.total = data.total;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 分页处理一页显示多少条数据
    onShowSizeChange(current, pageSize) {
      this.pagination.current = current;
      this.getCategories(current, pageSize);
    },
    // 点击下一页
    nextPage(current, pageSize) {
      this.getCategories(current, pageSize);
    },
  },
};
</script>

<style>
</style>