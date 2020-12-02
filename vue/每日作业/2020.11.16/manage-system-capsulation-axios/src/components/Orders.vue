<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb separator=">" style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: 900; font-size: 18px; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item href=""> 订单管理 </a-breadcrumb-item>
      <a-breadcrumb-item href=""> 订单列表 </a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <!-- 搜索框 -->
      <a-row style="margin-bottom: 20px">
        <a-col :span="8">
          <a-input-search size="large" placeholder="请输入内容" enter-button />
        </a-col>
      </a-row>
      <!-- 表格 -->
      <a-table
        :row-key="(record) => record.order_id"
        :columns="table.columns"
        :data-source="table.data"
        :pagination="false"
        bordered
      >
        <!-- 序号 -->
        <template #index="{ index }">
          {{ index + 1 }}
        </template>
        <!-- 是否付款  -->
        <template #pay_status="{ record }">
          <a-tag v-if="record.pay_status == 0" color="pink"> 未付款 </a-tag>
          <a-tag v-if="record.pay_status == 1" color="green"> 已付款 </a-tag>
        </template>
        <!-- 操作按钮 -->
        <template #operation>
          <!-- 修改地址 -->
          <a-button
            type="primary"
            size="large"
            style="margin-right: 10px"
            @click="editAddress"
          >
            <template #icon>
              <EditOutlined />
            </template>
          </a-button>
          <!-- 定位 -->
          <a-button type="danger" size="large">
            <template #icon>
              <EnvironmentOutlined />
            </template>
          </a-button>
        </template>
      </a-table>
      <!-- 分页器 -->
      <a-pagination
        style="margin: 20px 0px"
        v-model:current="pagination.current"
        v-model:pageSize="pagination.pageSize"
        :total="pagination.total"
        :show-total="
          (total) => `共有
    ${pagination.total} 条`
        "
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pagination.pageSizeOptions"
        @change="nextPage"
        show-quick-jumper
      />
    </a-card>
    <!-- 修改地址模态框 -->
    <a-modal
      title="修改地址"
      okText="确定"
      cancelText="取消"
      v-model:visible="address.visible"
      :confirm-loading="address.confirmLoading"
      @ok="updateAddress"
      :afterClose="cancelUpdateAddress"
    >
      <a-form :model="address.form" :rules="address.rules" ref="addressForm">
        <a-form-item label="省市区/县" name="province">
          <a-cascader
            v-model:value="address.form.province"
            :options="address.options"
            expand-trigger="hover"
            placeholder="请选择"
          />
        </a-form-item>
        <a-form-item label="详细地址" name="detail">
          <a-input v-model:value="address.form.detail" />
        </a-form-item>
      </a-form>
    </a-modal>
  </a-layout>
</template>

<script>
// 导入接口地址
import { orders } from "@/api";
// 导入请求方式
import { httpGet } from "@/utils/http.js";
// 操作图标
import { EnvironmentOutlined, EditOutlined } from "@ant-design/icons-vue";
// 地区联动数据
import CityData from "@/api/citydata";
import { message } from "ant-design-vue";
export default {
  components: {
    EnvironmentOutlined,
    EditOutlined,
  },
  data() {
    return {
      table: {
        // 渲染表格 列 数据
        columns: [
          {
            title: "#",
            key: "index",
            slots: { customRender: "index" },
          },
          {
            title: "订单编号",
            dataIndex: "order_number",
          },
          {
            title: "订单价格",
            dataIndex: "order_price",
          },
          {
            title: "是否付款",
            key: "pay_status",
            slots: { customRender: "pay_status" },
          },
          {
            title: "是否发货",
            dataIndex: "is_send",
          },
          {
            title: "下单时间",
            dataIndex: "create_time",
          },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" },
          },
        ],
        // 数据源
        data: [],
      },
      pagination: {
        current: 1,
        pageSize: 5,
        total: 0,
        // 分页下拉选项
        pageSizeOptions: ["1", "2", "5", "10"],
      },
      address: {
        visible: false,
        confirmLoading: false,
        form: {
          province: [],
          detail: "",
        },
        rules: {
          province: [
            {
              type: "array",
              required: true,
              message: "请选择省市地址",
              trigger: "blur",
            },
          ],
          detail: [
            { required: true, message: "请填写详细地址", trigger: "blur" },
          ],
        },
        options: [],
      },
    };
  },
  created() {
    this.getOrdersData();
  },
  methods: {
    // 获取表格数据
    getOrdersData() {
      httpGet(orders.getOrders, {
        pagenum: this.pagination.current,
        pagesize: this.pagination.pageSize,
      })
        .then((response) => {
          //   console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            // 数据源赋值
            this.table.data = data.goods;
            // 总条数
            this.pagination.total = data.total;
            // 当前页
            this.pagination.current = Number(data.pagenum);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 分页处理一页显示多少条数据
    onShowSizeChange(current, pageSize) {
      this.pagination.current = current;
      this.getOrdersData(current, pageSize);
    },
    // 点击下一页
    nextPage(current, pageSize) {
      this.getOrdersData(current, pageSize);
    },
    // 修改地址
    editAddress() {
      // 显示模态框
      this.address.visible = true;
      // 三级联动赋值
      this.address.options = CityData;
    },
    // 更新地址
    updateAddress() {
      this.$refs.addressForm
        .validate()
        .then(() => {
          message.success("更新成功!!!");
          this.address.visible = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 取消更新地址
    cancelUpdateAddress() {
      this.$refs.addressForm.resetFields();
    },
  },
};
</script>

<style>
.ant-btn-icon-only.ant-btn-lg {
  width: 60px;
}
</style>