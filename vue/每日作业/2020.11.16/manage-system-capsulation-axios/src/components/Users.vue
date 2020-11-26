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
          <!-- 添加弹出框 -->
          <a-modal
            title="添加用户"
            cancelText="取消"
            okText="确定"
            v-model:visible="addVisible"
            :confirm-loading="confirmLoading"
            @Ok="addUser"
            @cancel="cancelAddUser"
          >
            <a-form ref="ruleAddForm" :model="addRorm" :rules="addUsersRules">
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
                    <a-input
                      type="text"
                      v-model:value="addRorm.username"
                      autocomplete="off"
                    />
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
                    <a-input-password
                      type="password"
                      v-model:value="addRorm.password"
                      autocomplete="off"
                    />
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
                    <a-input
                      type="text"
                      v-model:value="addRorm.email"
                      autocomplete="off"
                    />
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
                    <a-input
                      type="text"
                      v-model:value="addRorm.mobile"
                      autocomplete="off"
                    />
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
      :pagination="false"
    >
      <!-- 状态开关 -->
      <template #mg_state="{ text }">
        <a-switch
          v-model:checked="text.mg_state"
          :id="text.id"
          @change="alterState"
        />
      </template>
      <!-- 操作项 -->
      <template #operation="{ record }">
        <!-- 编辑 -->
        <a-button type="primary" @click="readUser(record.id)">
          <EditOutlined />
        </a-button>
        <!-- 删除 -->
        <a-button
          type="danger"
          style="margin: 0 10px"
          @click="delUser(record.id)"
          ><DeleteOutlined
        /></a-button>
        <!-- 权限 -->
        <a-button
          type="default"
          style="background-color: #e6a23c; color: #fff"
          @click="roleAllot(record)"
        >
          <SettingOutlined
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
    <!-- 编辑用户弹出框 -->
    <a-modal
      title="修改用户"
      cancelText="取消"
      okText="确定"
      v-model:visible="editVisible"
      :confirm-loading="confirmLoading"
      @Ok="editUser"
      @cancel="cancelEditUser"
    >
      <a-form ref="ruleEditForm" :model="editRorm" :rules="editUsersRules">
        <a-row>
          <a-col :span="24">
            <!-- 用户名 -->
            <a-form-item
              disabled
              label="用户名"
              name="username"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input
                type="text"
                v-model:value="editRorm.username"
                autocomplete="off"
              />
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
              <a-input
                type="text"
                v-model:value="editRorm.email"
                autocomplete="off"
              />
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
              <a-input
                type="text"
                v-model:value="editRorm.mobile"
                autocomplete="off"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
    <!-- 分配角色弹出框 -->
    <a-modal
      title="分配角色"
      v-model:visible="roleVisible"
      :confirm-loading="confirmLoading"
      @ok="allotRole"
      @cancel="cancelRoleUser"
    >
      <p>当前的用户: {{ roleInfo.username }}</p>
      <p>当前的角色: {{ roleInfo.role_name }}</p>
      <p>
        分配新角色:
        <a-select
          style="width: 120px"
          placeholder="请选择"
          v-model:value="roleSelected"
        >
          <a-select-option
            v-for="item in selectList"
            :key="item.id"
            :value="item.id"
          >
            {{ item.roleName }}
          </a-select-option>
        </a-select>
      </p>
    </a-modal>
  </a-layout>
</template>

<script>
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
// 引入请求方法 httpGet
import { httpGet, httpPost, httpDelete, httpPut } from "@/utils/http";
// 引入请求路径
import { user, roles } from "@/api";
// 引入全局提示框
import { message, Modal } from "ant-design-vue";
// 动态模态框的依赖
import { createVNode } from "vue";
export default {
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },

  data() {
    // 自定义校验规则
    // 邮箱校验
    let validateEmail = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入邮箱！");
      } else if (
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
      ) {
        return Promise.reject("请输入正确的邮箱格式！");
      } else {
        return Promise.resolve();
      }
    };
    // 电话校验
    let validateMobile = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入手机号！");
      } else if (!/^[1]([3-9])[0-9]{9}$/.test(value)) {
        return Promise.reject("请输入正确的手机号！");
      } else {
        return Promise.resolve();
      }
    };
    return {
      // 添加用户弹出框
      addVisible: false,
      // 确定按钮无加载效果
      confirmLoading: false,

      // 表格列名
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
      // 表格数据源
      tableData: [],

      // 当前页
      current: 1,
      total: 0,
      pageSize: 5,
      // 分页下拉选项
      pageSizeOptions: ["1", "2", "5", "10"],

      // 添加用户 model对象
      addRorm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      // 校验规则
      addUsersRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符之间", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在6-18个字符之间", trigger: "blur" },
        ],
        email: [{ validator: validateEmail, trigger: "change" }],
        mobile: [{ validator: validateMobile, trigger: "change" }],
      },

      // 编辑
      editVisible: false,
      editRorm: {},
      editUsersRules: {
        email: [{ validator: validateEmail, trigger: "change" }],
        mobile: [{ validator: validateMobile, trigger: "change" }],
      },

      // 分配角色
      roleVisible: false,
      // 显示项
      roleInfo: {},
      // 下拉菜单
      selectList: [],
      // 下拉选这的值
      roleSelected: null,
    };
  },
  created() {
    // 调用获取用户数据的方法
    this.getUsers();
  },
  methods: {
    // 显示模态框
    addUserModal() {
      this.addVisible = true;
    },
    // 获取用户数据
    getUsers() {
      httpGet(user.GetUsers, {
        pagenum: this.current,
        pagesize: this.pageSize,
      })
        .then((response) => {
          //   console.log(response);
          let { meta, data } = response;
          // 如果后台返回的状态码为200,则代表请求成
          if (meta.status == 200) {
            this.tableData = data.users;
            // console.log(this.tableData);
            // 处理序号
            this.tableData.forEach((ele, index) => {
              ele.index = index + 1;
            });

            // 当前页
            this.current = data.pagenum;
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
      this.getUsers(current, pageSize);
    },
    // 点击下一页
    nextPage(current, pageSize) {
      this.getUsers(current, pageSize);
    },

    // 添加用户
    addUser() {
      // console.log(1111);
      // 表单校验 成功发起请求
      this.$refs.ruleAddForm
        .validate()
        .then(() => {
          // 解构参数
          let params = {
            username: this.addRorm.username,
            password: this.addRorm.password,
            email: this.addRorm.email,
            mobile: this.addRorm.mobile,
          };
          // console.log(params);
          //发起httpPost请求
          httpPost(user.AddUser, params)
            .then((response) => {
              // console.log(response);
              let { meta } = response;

              if (meta.status == 201) {
                // 让模态框消失
                this.addVisible = false;
                // 清空表单中的输入框
                this.$refs.ruleAddForm.resetFields();
                // 消息框提示添加成功
                message.success(meta.msg);
                // 重新渲染数据
                this.getUsers();
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
    // 取消添加用户
    cancelAddUser() {
      this.$refs.ruleAddForm.resetFields();
    },

    // 删除用户
    delUser(id) {
      let _this = this;
      // 动态加载一个模态框
      Modal.confirm({
        title: "提示:",
        icon: createVNode(ExclamationCircleOutlined),
        content: "此操作将永久删除该用户, 是否继续?",
        okText: "确认",
        cancelText: "取消",
        // 点击确定
        onOk() {
          httpDelete(user.delUser + `/${id}`)
            .then((response) => {
              // console.log(response);
              let { meta } = response;
              if (meta.status == 200) {
                message.success(meta.msg);
                // 刷新页面
                _this.getUsers();
              } else if (meta.status == 400) {
                message.success(meta.msg);
                // 刷新页面
                _this.getUsers();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
        // 点击取消
        onCancel() {
          message.warning("删除操作已取消!!!");
        },
      });
    },

    // 编辑回显数据
    readUser(id) {
      // 显示模态框
      this.editVisible = true;
      // 发起get请求
      httpGet(user.readUser + `/${id}`)
        .then((response) => {
          // console.log(response);
          let { data, meta } = response;
          if (meta.status == 200) {
            // 将后台数据存到editRorm模型数据中
            this.editRorm = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 更新用户
    editUser() {
      this.$refs.ruleEditForm
        .validate()
        .then(() => {
          console.log("values", this.editRorm);
          httpPut(user.editUser + `/${this.editRorm.id}`, this.editRorm)
            .then((response) => {
              // console.log(response);
              let { meta } = response;
              if (meta.status == 200) {
                // 全局提示成功
                message.success(meta.msg);
                // 关闭模态框
                this.editVisible = false;
                // 更新页面
                this.getUsers();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // 取消更新用户
    cancelEditUser() {
      message.warning("更新用户已取消!!!");
    },

    // 分配角色
    roleAllot(userRole) {
      // 显示弹出框
      this.roleVisible = true;
      // console.log(userRole);
      this.roleInfo = userRole;
      // 发起get请求获取下拉option的值
      httpGet(roles.getRoles)
        .then((response) => {
          // console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            this.selectList = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 修改角色
    allotRole() {
      // console.log(this.roleInfo.id);
      // console.log(this.roleSelected);
      // 判断用户选择项为null值
      if (this.roleSelected == null) {
        message.error("请您选择一个角色！！");
        return;
      }
      // 发起角色更改请求
      httpPut(`users/${this.roleInfo.id}/role`, { rid: this.roleSelected })
        .then((response) => {
          // console.log(response);
          let { meta } = response;
          if (meta.status == 400) {
            message.error(meta.msg);
          }
          if (meta.status == 200) {
            // 提示用户成功
            message.success(meta.msg);
            // 重新渲染表格
            this.getUsers();
            // 重置选项
            this.roleSelected = null;
            // 模态框消失
            this.roleVisible = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取消角色分配
    cancelRoleUser() {
      // 重置选项
      this.roleSelected = null;
      message.warning("用户已取消更改分配角色！！！");
    },
    // 更改用户状态
    alterState(checked, event) {
      httpPut(`users/${event.target.id}/state/${checked}`)
        .then((response) => {
          // console.log(response);
          let { meta } = response;
          if (meta.status == 200) {
            message.success(meta.msg);
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