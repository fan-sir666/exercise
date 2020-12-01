<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb separator=">" style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: 900; font-size: 18px; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item href=""> 权限管理 </a-breadcrumb-item>
      <a-breadcrumb-item href=""> 角色列表 </a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <!-- 添加角色 -->
      <a-row style="margin-bottom: 24px">
        <a-col :span="24">
          <a-button type="primary" @click="showRole"> 添加角色 </a-button>
        </a-col>
      </a-row>
      <!-- 添加弹出框 -->
      <a-modal
        title="添加角色"
        cancelText="取消"
        okText="确定"
        v-model:visible="addVisible"
        :confirm-loading="confirmLoading"
        @Ok="addRole"
        @cancel="cancelAddRole"
      >
        <a-form ref="roleAddForm" :model="addRorm" :rules="roleRules">
          <a-row>
            <a-col :span="24">
              <!-- 角色名称 -->
              <a-form-item
                required
                has-feedback
                label="角色名称"
                name="roleName"
                :labelCol="{ span: 4 }"
                :wrapperCol="{ span: 20 }"
              >
                <a-input
                  type="text"
                  v-model:value="addRorm.roleName"
                  autocomplete="off"
                />
              </a-form-item>
              <!-- 角色描述 -->
              <a-form-item
                label="角色描述"
                name="roleDesc"
                :labelCol="{ span: 4 }"
                :wrapperCol="{ span: 20 }"
              >
                <a-input
                  type="text"
                  v-model:value="addRorm.roleDesc"
                  autocomplete="off"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-modal>
      <!-- 表格 -->
      <a-table
        :columns="rolesColumns"
        :data-source="rolesData"
        bordered
        :row-key="(record) => record.id"
        :pagination="false"
        childrenColumnName="false"
        :expandIcon="expandIcon"
      >
        <!-- 序号 -->
        <template #index="{ index }">
          {{ index + 1 }}
        </template>
        <!-- 下拉项 -->
        <template #expandedRowRender="{ record }">
          <!-- {{ record }} -->
          <!-- 一级 -->
          <a-row
            v-for="(item1, index1) in record.children"
            :key="item1.id"
            :class="['bdbottom vcenter', index1 == 0 ? 'bdtop' : '']"
          >
            <a-col :span="5">
              <span>
                <a-tag
                  closable
                  @close="delTag($event, record.id, item1.id)"
                  color="blue"
                >
                  {{ item1.authName }}
                </a-tag>
                <CaretRightOutlined />
              </span>
            </a-col>
            <a-col :span="19">
              <!-- 二级 -->
              <a-row
                v-for="(item2, index2) in item1.children"
                :key="item2.id"
                :class="[
                  'bdbottom vcenter',
                  index2 == item1.children.length - 1 ? 'active' : 'bdbottom',
                ]"
              >
                <a-col :span="6">
                  <span>
                    <a-tag
                      closable
                      @close="delTag($event, record.id, item2.id)"
                      color="green"
                    >
                      {{ item2.authName }}
                    </a-tag>
                    <CaretRightOutlined />
                  </span>
                </a-col>
                <a-col :span="18">
                  <span>
                    <a-tag
                      color="orange"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      closable
                      @close="delTag($event, record.id, item3.id)"
                    >
                      {{ item3.authName }}
                    </a-tag>
                  </span>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </template>
        <!-- 操作 -->
        <template #operation="{ record }">
          <!-- 编辑 -->
          <a-button type="primary"> <EditOutlined />编辑 </a-button>
          <!-- 删除 -->
          <a-button type="danger" style="margin: 0 10px"
            ><DeleteOutlined />删除</a-button
          >
          <!-- 权限 -->
          <a-button
            type="default"
            style="background-color: #e6a23c; color: #fff"
            @click="privileges(record)"
          >
            <SettingOutlined />分配权限</a-button
          >
        </template>
      </a-table>
    </a-card>
    <!-- 分配权限模态框 -->
    <a-modal
      title="分配权限"
      v-model:visible="allotVisible"
      :confirm-loading="confirmLoading"
      @cancel="clearRrivileges"
      @ok="addRrivileges"
    >
      <a-tree
        checkable
        :tree-data="treeData"
        :replaceFields="{ children: 'children', title: 'authName', key: 'id' }"
        v-model:checkedKeys="treeCheckedKeys"
        :defaultExpandAll="defaultExpandAll"
        v-if="defaultExpandAll"
      >
      </a-tree>
    </a-modal>
  </a-layout>
</template>

<script>
// 导入接口
import { roles, rights } from "@/api";
// 导入请求方法
import { httpGet, httpPost, httpDelete } from "@/utils/http";
// 引入菜单小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  CaretRightOutlined,
  // 自定义下拉的图标
  DownOutlined,
  RightOutlined,
  // 动态模态框
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
// 引入全局提示框
import { message, Modal } from "ant-design-vue";
import { createVNode } from "vue";
export default {
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
    CaretRightOutlined,
  },
  data() {
    // 自定义校验规则
    let validateRoleName = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入角色名称");
      } else {
        return Promise.resolve();
      }
    };
    return {
      rolesColumns: [
        {
          title: "#",
          key: "index",
          slots: { customRender: "index" },
        },
        {
          title: "角色名称",
          dataIndex: "roleName",
        },
        {
          title: "角色描述",
          dataIndex: "roleDesc",
        },
        {
          title: "操作",
          key: "operation",
          slots: { customRender: "operation" },
        },
      ],
      rolesData: [],
      // 添加弹出框
      addVisible: false,
      confirmLoading: false,
      addRorm: {
        roleName: "",
        roleDesc: "",
      },
      roleRules: {
        roleName: [{ validator: validateRoleName, trigger: "change" }],
      },
      // 分配权限
      allotVisible: false,
      // 树形的数据源
      treeData: [],
      // 展开节点id数组
      treeCheckedKeys: [],
      defaultExpandAll:false
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    // 获取所有数据
    getRoles() {
      httpGet(roles.getRoles)
        .then((response) => {
          //   console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            this.rolesData = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 修改展开收起图标
    expandIcon(props) {
      //   console.log(props, "opop");
      if (props.expanded) {
        return (
          <DownOutlined
            onClick={(e) => {
              props.onExpand(props.record, e);
            }}
          />
        );
      } else {
        return (
          <RightOutlined
            onClick={(e) => {
              props.onExpand(props.record, e);
            }}
          />
        );
      }
    },
    // 显示添加角色模态框
    showRole() {
      this.addVisible = true;
    },
    // 添加角色
    addRole() {
      // 表单校验 成功发起请求
      this.$refs.roleAddForm
        .validate()
        .then(() => {
          // 解构参数
          let params = {
            roleName: this.addRorm.roleName,
            roleDesc: this.addRorm.roleDesc,
          };
          // console.log(params);
          //发起httpPost请求
          httpPost(roles.addRoles, params)
            .then((response) => {
              // console.log(response);
              let { meta } = response;
              if (meta.status == 201) {
                // 让模态框消失
                this.addVisible = false;
                // 清空表单中的输入框
                this.$refs.roleAddForm.resetFields();
                // 消息框提示添加成功
                message.success(meta.msg);
                // 重新渲染数据
                this.getRoles();
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // 取消添加角色
    cancelAddRole() {
      // 重置表单
      this.$refs.roleAddForm.resetFields();
      // 提示
      message.warning("取消添加角色!!!");
    },
    // 删除表格标签
    delTag(e, roleId, rightId) {
      // console.log(111111);
      const _this = this;
      // 阻止点击x号的默认行为
      e.preventDefault();
      // 动态模态框
      Modal.confirm({
        title: "提示",
        icon: createVNode(ExclamationCircleOutlined),
        content: "此操作将永久删除该文件, 是否继续?",
        // 确定按钮
        onOk() {
          // console.log(1111111);
          httpDelete(`roles/${roleId}/rights/${rightId}`)
            .then((response) => {
              // console.log(response);
              let { meta } = response;
              if (meta.status == 200) {
                // 提示删除成功
                message.success(meta.msg);
                // 重载页面
                _this.getRoles();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
        // 取消按钮
        onCancel() {
          // console.log(22222222);
          message.warning("已取消删除操作!!!");
        },
      });
    },
    // 分配权限
    privileges(record) {
      // console.log(111111);
      // 显示模态框
      this.allotVisible = true;
      httpGet(rights.getTreeRights)
        .then((response) => {
          // console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            // 先给数据源赋值
            this.treeData = data;
            // 再显示模态框
            this.defaultExpandAll=true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(record);
      // 查找最里层id
      this.findJurisdiction(record, this.treeCheckedKeys);
      // console.log(this.treeCheckedKeys);
    },
    // 通过递归的方式 将最里层的id存到treeCheckedKeys
    findJurisdiction(node, arr) {
      // 如果没有children字段
      if (!node.children) {
        // 结束递归 将id存入
        return arr.push(node.id);
      }
      // 递归自己调用自己
      node.children.forEach((ele) => this.findJurisdiction(ele, arr));
    },
    // 清空treeCheckedKeys
    clearRrivileges() {
      this.treeCheckedKeys = [];
    },
    // 添加权限
    addRrivileges() {
      console.log(111111);
      // 关闭模态框
      this.allotVisible = false;
    },
  },
};
</script>

<style>
.ant-tag {
  margin: 7px;
  padding: 2px 14px;
  font-size: 14px;
}
.bdtop {
  border-top: 1px solid #eee;
}

.bdbottom {
  border-bottom: 1px solid #eee;
}
.bdbottom.active {
  border-bottom: none;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>