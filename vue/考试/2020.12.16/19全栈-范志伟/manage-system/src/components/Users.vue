<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>用户管理</a-breadcrumb-item>
      <a-breadcrumb-item>用户列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <!-- 主体 start -->
      <a-row>
        <a-col :span="8">
          <a-input-search enter-button placeholder="请输入内容" />
        </a-col>
        <a-col :offset="1">
          <a-button type="primary"> 添加用户 </a-button>
        </a-col>
      </a-row>
      <a-table
        style="margin-top: 24px"
        bordered
        :columns="userTable.columns"
        :data-source="userTable.data"
        rowKey="id"
        :pagination="false"
      >
        <!-- 索引 -->
        <template #index="{ index }">{{ index + 1 }}</template>
        <!-- 状态 -->

        <template #mg_state="{ record }">
          <a-switch v-if="record.mg_state" :checked="record.mg_state" />
          <a-switch v-else :checked="record.mg_state" />
        </template>
        <!-- 操作 -->
        <template #operation>
          <!-- 编辑 -->
          <a-button type="primary" size="large">
            <template #icon><EditOutlined /></template>
          </a-button>
          <!-- 删除 -->
          <a-button type="danger" size="large" style="margin: 0 20px">
            <template #icon><DeleteOutlined /></template>
          </a-button>
          <a-button size="large" style="background-color: orange">
            <template #icon><SettingOutlined /></template>
          </a-button>
        </template>
      </a-table>
      <!-- 分页器 -->
      <a-pagination
        v-model:current="userPagination.current"
        v-model:pageSize="userPagination.pageSize"
        :total="userPagination.total"
        :show-total="(total) => `共 ${userPagination.total} 条`"
        show-size-changer
        :page-size-options="userPagination.pageSizeOptions"
        @showSizeChange="onShowSizeChange"
        @change="onChange"
        showQuickJumper
      />
      <!-- 主体 end -->
    </a-card>
  </a-layout>
</template>
<script>
// 小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
// 请求地址
import { user } from "@/api";
// 请求方式
import { httpGet } from "@/utils/http";
// 全局提示
// import { message } from "ant-design-vue";
export default {
  data() {
    return {
      userTable: {
        columns: [
          {
            title: "#",
            key: "index",
            slots: { customRender: "index" },
          },
          {
            title: "姓名",
            dataIndex: "username",
          },
          {
            title: "邮箱",
            dataIndex: "email",
          },
          {
            title: "电话",
            dataIndex: "mobile",
          },
          {
            title: "角色",
            dataIndex: "role_name",
          },
          {
            title: "状态",
            key: "mg_state",
            slots: { customRender: "mg_state" },
          },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" },
          },
        ],
        data: [],
      },
      userPagination: {
        current: 1,
        pageSize: 2,
        total: 0,
        pageSizeOptions: ["1", "2", "5", "10", "20"],
      },
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    // 获取列表
    getTableData() {
      httpGet(user.GetLists, {
        pagenum: this.userPagination.current,
        pagesize: this.userPagination.pageSize,
      })
        .then((res) => {
          // console.log(res);
          let { meta, data } = res;
          if (meta.status == 200) {
            // 表格数据源赋值
            this.userTable.data = data.users;
            this.userPagination.current = Number(data.pagenum);
            this.userPagination.total = Number(data.total);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onShowSizeChange() {
      console.log(11111);
    },
    onChange(){
      console.log(22222);
    }
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
};
</script>

<style>
</style>

