<template>
  <a-layout style="width: 100%; height: 100%">
    <!-- 面包屑导航 -->
    <a-breadcrumb separator=">" style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: 900; font-size: 18px; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item>首页用户管</a-breadcrumb-item>
      <a-breadcrumb-item>理用户列表</a-breadcrumb-item>
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
            <a-button type="primary" size="large" @click="addUserModal">
              添加按钮
            </a-button>
          </a-form-item>
          <!-- 弹出框 -->
          <a-modal
            title="添加用户"
            cancelText="取消"
            okText="确定"
            v-model:visible="visible"
            :confirm-loading="confirmLoading"
          >
            <a-form>
              <a-row>
                <a-col :span="24">
                  <!-- 用户名 -->
                  <a-form-item
                    required
                    has-feedback
                    label="用户名"
                    name="username"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input type="text" />
                  </a-form-item>
                  <!-- 密码 -->
                  <a-form-item
                    required
                    has-feedback
                    label="密码"
                    name="password"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input-password type="password" />
                  </a-form-item>

                  <!-- 邮箱 -->
                  <a-form-item
                    required
                    has-feedback
                    label="邮箱"
                    name="email"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input type="text" />
                  </a-form-item>

                  <!-- 手机号 -->
                  <a-form-item
                    required
                    has-feedback
                    label="手机号"
                    name="mobile"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input type="text" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-modal>
        </a-col>
      </a-row>
    </a-form>
    <!-- 表格 -->
    <a-table
      :row-key="(record) => record.id"
      :columns="tableColumns"
      :data-source="tableData"
      bordered
    >
      <template #mg_state="{ text }">
        <a-switch :checked="text.mg_state" />
      </template>

      <template #operation>
        <!-- 编辑 -->
        <a-button type="primary">
          <EditOutlined />
        </a-button>
        <!-- 删除 -->
        <a-button type="danger" style="margin: 0 10px">
          <DeleteOutlined
        /></a-button>
        <!-- 权限 -->
        <a-button type="default" style="background-color: #e6a23c; color: #fff">
          <SettingOutlined
        /></a-button>
      </template>
    </a-table>
  </a-layout>
</template>

<script>
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
// 引入请求路径
import { user } from "@/api";
export default {
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },

  data() {
    return {
      // 添加用户弹出框
      visible: false,
      confirmLoading: false,

      tableColumns: [
        { title: "#", dataIndex: "index", key: "index" },
        { title: "姓名", dataIndex: "username", key: "username" },
        { title: "邮箱", dataIndex: "email", key: "email" },
        { title: "电话", dataIndex: "mobile", key: "mobile" },
        { title: "角色", dataIndex: "role_name", key: "role_name" },
        { title: "状态", key: "mg_state", slots: { customRender: "mg_state" } },
        {
          title: "操作",
          key: "operation",
          slots: { customRender: "operation" },
        },
      ],
      tableData: [],
    };
  },
  created() {
    // 调用获取用户数据的方法
    this.getUsers();
  },
  methods: {
    // 显示模态框
    addUserModal() {
      this.visible = true;
    },
    // 获取用户数据
    getUsers() {
      httpGet(user.GetUsers, {
        pagenum: 1,
        pagesize: 2,
      })
        .then((response) => {
          //   console.log(response);
          let { meta, data } = response;
          // 如果后台返回的状态码为200,则代表请求成
          if (meta.status == 200) {
            this.tableData = data.users;
            // console.log(this.tableData);
            this.tableData.forEach((ele, index) => {
              ele.index = index + 1;
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>