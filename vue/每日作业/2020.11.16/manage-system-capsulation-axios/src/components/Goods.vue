<template>
  <a-layout style="width: 100%; height: 100%">
    <!-- 面包屑导航 -->
    <a-breadcrumb separator=">" style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: 900; font-size: 18px; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>商品列表</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 添加区域 -->
    <a-form>
      <a-row :gutter="16">
        <!-- 搜索框 -->
        <a-col :span="8">
          <a-form-item :wrapperCol="{ span: 24 }">
            <a-input-search size="large" placeholder="请输入内容" />
          </a-form-item>
        </a-col>
        <!-- 添加按钮 -->
        <a-col :span="4">
          <a-form-item>
            <a-button type="primary" size="large"> 添加商品 </a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <!-- 表格 -->
    <a-table
      :row-key="(record) => record.goods_id"
      :columns="tableColumns"
      :data-source="tableData"
      bordered
      :pagination="false"
    >
      <!-- 操作项 -->
      <template #operation>
        <!-- 编辑 -->
        <a-button type="primary">
          <EditOutlined />
        </a-button>
        <!-- 删除 -->
        <a-button type="danger" style="margin: 0 10px"
          ><DeleteOutlined
        /></a-button>
      </template>
    </a-table>
    <!-- 分页器 -->
    <a-pagination
      style="margin: 20px 0px"
      v-model:current="current"
      v-model:pageSize="pageSize"
      :total="total"
      :show-total="
        (total) => `共有
    ${total} 条`
      "
      show-size-changer
      @showSizeChange="onShowSizeChange"
      :page-size-options="pageSizeOptions"
      @change="nextPage"
      show-quick-jumper
    />
  </a-layout>
</template>

<script>
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
// 引入请求路径
import { goods } from "@/api";
export default {
  components: {
    EditOutlined,
    DeleteOutlined,
  },

  data() {
    return {
      // 表格列名
      tableColumns: [
        { title: "#", dataIndex: "index", key: "index" },
        { title: "商品名称", dataIndex: "goods_name" },
        { title: "商品价格(元)", dataIndex: "goods_price" },
        { title: "商品重量", dataIndex: "goods_weight" },
        { title: "创建时间", dataIndex: "add_time" },
        {
          title: "操作",
          key: "operation",
          slots: { customRender: "operation" },
        },
      ],
      // 表格数据源
      tableData: [],

      // 当前页
      current: 1,
      total: 0,
      pageSize: 10,
      // 分页下拉选项
      pageSizeOptions: ["5", "10", "15", "20"],
    };
  },
  created() {
    // 调用获取用户数据的方法
    this.getGoods();
  },
  methods: {
    // 获取用户数据
    getGoods() {
      httpGet(goods.getGoods, {
        pagenum: this.current,
        pagesize: this.pageSize,
      })
        .then((response) => {
          //   console.log(response);
          let { meta, data } = response;
          // 如果后台返回的状态码为200,则代表请求成
          if (meta.status == 200) {
            this.tableData = data.goods;
            // console.log(this.tableData);
            // 处理序号
            this.tableData.forEach((ele, index) => {
              ele.index = index + 1;
            });

            // 当前页
            this.current = Number(data.pagenum);
            // 数据总量
            this.total = data.total;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 分页处理一页显示多少条数据
    onShowSizeChange(current, pageSize) {
      this.current = current;
      this.getGoods(current, pageSize);
    },
    // 点击下一页
    nextPage(current, pageSize) {
      this.getGoods(current, pageSize);
    },
  },
};
</script>

<style>
</style>