<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb separator=">" style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: 900; font-size: 18px; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item href=""> 权限管理 </a-breadcrumb-item>
      <a-breadcrumb-item href=""> 权限列表 </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 表格 -->
    <a-table
      :columns="rightsColumns"
      :data-source="rightsData"
      bordered
      :row-key="(record) => record.id"
      :pagination="false"
    >
      <!-- 序号 -->
      <template #index="{ index }">
        {{ index + 1 }}
      </template>
      <!-- 权限等级 -->
      <template #level="{ record }">
        <a-tag v-if="record.level == 0" color="blue">一级</a-tag>
        <a-tag v-else-if="record.level == 1" color="green">二级</a-tag>
        <a-tag v-else-if="record.level == 2" color="orange">三级</a-tag>
      </template>
    </a-table>
  </a-layout>
</template>

<script>
// 导入接口地址
import { rights } from "@/api";
// 导入请求方式
import { httpGet } from "@/utils/http.js";
export default {
  data() {
    return {
      // 表格头部
      rightsColumns: [
        {
          title: "#",
          key: "index",
          slots: { customRender: "index" },
        },
        {
          title: "权限名称",
          dataIndex: "authName",
        },
        {
          title: "路径",
          dataIndex: "path",
        },
        {
          title: "权限等级",
          key: "level",
          slots: { customRender: "level" },
        },
      ],
      // 表格数据源
      rightsData: [],
    };
  },
  created() {
    this.getRinghts();
  },
  methods: {
    getRinghts() {
      httpGet(rights.GetRights)
        .then((response) => {
          // console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            this.rightsData = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>