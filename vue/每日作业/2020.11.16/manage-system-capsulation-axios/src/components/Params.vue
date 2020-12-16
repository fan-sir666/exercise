<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb separator=">" style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: 900; font-size: 18px; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item href=""> 数据统计 </a-breadcrumb-item>
      <a-breadcrumb-item href=""> 参数列表 </a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <!-- 警告框 -->
      <a-alert message="注意：只允许为第三级分类设置相关参数" banner />
      <!-- 级联选择 -->
      <a-row>
        <a-col :span="8">
          <span>选择商品分类：</span>
          <a-cascader
            v-model:value="cascader.selectedKey"
            :options="cascader.data"
            :fieldNames="cascader.fieldNames"
            style="margin: 24px 0"
            placeholder="请选择"
            @change="getId"
          />
        </a-col>
      </a-row>
      <!-- tab栏 -->
      <a-tabs v-model:activeKey="tabs.activeKey" @change="tabsChange">
        <a-tab-pane key="many" tab="动态参数">
          <a-button type="primary" :disabled="isDisabled" @click="showAddParams"
            >添加参数</a-button
          >
          <a-table
            style="margin-top: 24px"
            :row-key="(record) => record.attr_id"
            :columns="table.columns"
            :data-source="table.manyData"
            bordered
            :pagination="false"
            :expandIcon="expandIcon"
          >
            <template #index="{ index }">
              {{ index + 1 }}
            </template>
            <template #expandedRowRender="{ record }">
              <!-- 渲染标签 -->
              <a-tag
                color="blue"
                closable
                v-for="(item, index) in record.attr_vals"
                :key="item"
                @close="delTag(record, index)"
              >
                {{ item }}
              </a-tag>
              <!-- 添加标签输入框 -->
              <a-input
                v-if="record.inputVisible"
                ref="input"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                v-model:value="record.inputValue"
                @keyup.enter="addTag(record)"
              />
              <a-tag
                v-else
                @click="showInput(record)"
                style="background: #fff; borderstyle: dashed"
              >
                <plus-outlined /> New Tag
              </a-tag>
            </template>
            <template #operation="{ record }">
              <!-- 编辑 -->
              <a-button type="primary" @click="showEditParams(record)">
                <EditOutlined />
              </a-button>
              <!-- 删除 -->
              <a-button
                type="danger"
                style="margin: 0 10px"
                @click="delParmas(record)"
              >
                <DeleteOutlined
              /></a-button>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="only" tab="静态属性">
          <a-button type="primary" :disabled="isDisabled" @click="showAddParams"
            >添加参数</a-button
          >
          <a-table
            style="margin-top: 24px"
            :row-key="(record) => record.attr_id"
            :columns="table.columns"
            :data-source="table.onlyData"
            bordered
            :pagination="false"
            :expandIcon="expandIcon"
          >
            <template #index="{ index }">
              {{ index + 1 }}
            </template>
            <template #expandedRowRender="{ record }">
              <!-- 渲染标签 -->
              <a-tag
                color="blue"
                closable
                v-for="(item, index) in record.attr_vals"
                :key="item"
                @close="delTag(record, index)"
              >
                {{ item }}
              </a-tag>
              <!-- 添加标签输入框 -->
              <a-input
                v-if="record.inputVisible"
                ref="input"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                v-model:value="record.inputValue"
                @blur="addTag(record)"
              />
              <a-tag
                v-else
                @click="showInput(record)"
                style="background: #fff; borderstyle: dashed"
              >
                <plus-outlined /> New Tag
              </a-tag>
            </template>
            <template #operation="{ record }">
              <!-- 编辑 -->
              <a-button type="primary" @click="showEditParams(record)">
                <EditOutlined />
              </a-button>
              <!-- 删除 -->
              <a-button
                type="danger"
                style="margin: 0 10px"
                @click="delParmas(record)"
              >
                <DeleteOutlined
              /></a-button>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <!-- 添加参数模态框  -->
    <a-modal
      :title="'添加' + titleText"
      :maskClosable="false"
      v-model:visible="AddParams.visible"
      :afterClose="cancel"
      @ok="addParams"
    >
      <a-form
        :model="AddParams.Model"
        :rules="AddParams.Rules"
        ref="AddParamsRef"
      >
        <a-form-item required :label="titleText" name="attr_name">
          <a-input v-model:value="AddParams.Model.attr_name" />
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 编辑参数模态框  -->
    <a-modal
      :title="'编辑' + titleText"
      :maskClosable="false"
      v-model:visible="EditParams.visible"
      :afterClose="cancel"
      @ok="handEditParams"
    >
      <a-form
        :model="EditParams.Model"
        :rules="EditParams.Rules"
        ref="AddParamsRef"
      >
        <a-form-item required :label="titleText" name="attr_name">
          <a-input v-model:value="EditParams.Model.attr_name" />
        </a-form-item>
      </a-form>
    </a-modal>
  </a-layout>
</template>

<script>
// 导入请求地址
import { goods } from "@/api";
// 引入请求方法 httpGet
import { httpGet, httpPut, httpPost, httpDelete } from "@/utils/http";
// 小图标
import {
  EditOutlined,
  DeleteOutlined, // 自定义下拉的图标
  DownOutlined,
  RightOutlined,
  PlusOutlined, // 添加标签数据框图标
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
import { createVNode } from "vue";
import { message, Modal } from "ant-design-vue";
export default {
  data() {
    return {
      cascader: {
        selectedKey: [],
        data: [],
        fieldNames: {
          label: "cat_name",
          value: "cat_id",
          children: "children",
        },
        // 级联第三层id
        cat_id: null,
      },
      table: {
        columns: [
          {
            title: "#",
            key: "index",
            slots: { customRender: "index" },
          },
          {
            // title: this.tabs.activeKey == "many" ? "动态名称" : "静态属性",
            title: "参数名称",
            dataIndex: "attr_name",
          },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" },
          },
        ],
        manyData: [],
        onlyData: [],
      },
      tabs: {
        activeKey: "many",
      },
      // 添加参数 模态框
      AddParams: {
        visible: false,
        Model: {
          attr_name: "",
        },
        Rules: {
          attr_name: [
            { required: true, message: "请填写参数", trigger: "blur" },
          ],
        },
      },
      // 编辑参数 模态框
      EditParams: {
        visible: false,
        Model: {
          attr_name: "",
          attr_id: "",
          attr_vals: [],
        },
        Rules: {
          attr_name: [
            { required: true, message: "请填写参数", trigger: "blur" },
          ],
        },
      },
    };
  },
  created() {
    this.getCascader();
  },
  methods: {
    // 获取级联数据源
    getCascader() {
      httpGet(goods.getCategories)
        .then((response) => {
          //   console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            this.cascader.data = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取级联第三层id
    getId(value) {
      if (value.length == 3) {
        this.cascader.cat_id = value[value.length - 1];
        this.getTableData();
      } else {
        // 初始化数据
        this.cascader.cat_id = null;
        this.table.manyData = [];
        this.table.onlyData = [];
        message.warning("注意：只允许为第三级分类设置相关参数");
      }
    },
    // 获取表格数据
    getTableData() {
      if (this.cascader.cat_id != null) {
        // console.log(this.tabs.activeKey);
        httpGet(`categories/${this.cascader.cat_id}/attributes`, {
          sel: this.tabs.activeKey,
        })
          .then((response) => {
            // console.log(response);
            let { meta, data } = response;
            if (meta.status == 200) {
              // 添加标签 输入框显示隐藏 给数据添加inputVisible属性
              data.forEach((ele) => {
                ele.attr_vals =
                  ele.attr_vals.length == 0 ? [] : ele.attr_vals.split(" ");
                ele.inputVisible = false;
              });
              if (this.tabs.activeKey == "many") {
                // 在many的时候才需要处理成数组
                this.table.manyData = data;
                // console.log(this.table.manyData);
              } else {
                this.table.onlyData = data;
                // console.log(this.table.onlyData);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        message.warning("注意：只允许为第三级分类设置相关参数");
      }
    },
    // 监听tab切换
    tabsChange() {
      this.getTableData();
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
    // 删除标签
    delTag(record, i) {
      // console.log(record);
      // console.log(i);
      // console.log(record.attr_sel);
      // 删除标签的元素
      record.attr_vals.splice(i, 1);
      httpPut(
        `categories/${this.cascader.cat_id}/attributes/${record.attr_id}`,
        {
          // 新属性的名字
          attr_name: record.attr_name,
          // 属性的类型
          attr_sel: record.attr_sel,
          // 参数的属性值
          attr_vals: record.attr_vals.join(" "),
        }
      )
        .then((response) => {
          // console.log(response);
          let { meta } = response;
          if (meta.status == 200) {
            // 提示用户
            message.success(meta.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 添加标签输入框显示 自动获取焦点
    showInput(record) {
      record.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    // 添加标签
    addTag(record) {
      record.attr_vals.push(record.inputValue);
      httpPut(
        `categories/${this.cascader.cat_id}/attributes/${record.attr_id}`,
        {
          // 新属性的名字
          attr_name: record.attr_name,
          // 属性的类型
          attr_sel: record.attr_sel,
          // 参数的属性值
          attr_vals: record.attr_vals.join(" "),
        }
      )
        .then((response) => {
          let { meta } = response;
          if (meta.status == 200) {
            // 提示用户
            message.success(meta.msg);
            // 隐藏添加标签输入框
            record.inputVisible = false;
            // 清空添加标签输入框
            record.inputValue = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 显示添加参数模态框
    showAddParams() {
      this.AddParams.visible = true;
    },
    // 点击取消和关闭 清空输入框
    cancel() {
      this.$refs.AddParamsRef.resetFields();
    },
    // 添加参数
    addParams() {
      httpPost(`categories/${this.cascader.cat_id}/attributes`, {
        attr_name: this.AddParams.Model.attr_name,
        attr_sel: this.tabs.activeKey,
      })
        .then((response) => {
          // console.log(response);
          let { meta } = response;
          if (meta.status == 201) {
            message.success(meta.msg);
            this.AddParams.visible = false;
            this.$refs.AddParamsRef.resetFields();
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除参数
    delParmas(record) {
      const _this = this;
      Modal.confirm({
        title: "提示",
        icon: createVNode(ExclamationCircleOutlined),
        content: `此操作将永久删除该${_this.titleText},是否继续?`,
        onOk() {
          httpDelete(
            `categories/${_this.cascader.cat_id}/attributes/${record.attr_id}`
          )
            .then((response) => {
              let { meta } = response;
              if (meta.status == 200) {
                message.success(meta.msg);
                _this.getTableData();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
        onCancel() {
          message.warning("已取消删除操作!!!");
        },
      });
    },
    // 编辑回显
    showEditParams(record) {
      // console.log(record);
      this.EditParams.visible = true;
      // 数据回显
      this.EditParams.Model.attr_name = record.attr_name;
      this.EditParams.Model.attr_id = record.attr_id;
      this.EditParams.Model.attr_vals = record.attr_vals;
    },
    // 更新编辑
    handEditParams() {
      httpPut(
        `categories/${this.cascader.cat_id}/attributes/${this.EditParams.Model.attr_id}`,
        {
          attr_name: this.EditParams.Model.attr_name,
          attr_sel: this.tabs.activeKey,
          attr_vals: this.EditParams.Model.attr_vals.join(" ")
        }
      )
        .then((response) => {
          // console.log(response);
          let { meta } = response;
          if (meta.status == 200) {
            message.success(meta.msg);
            this.EditParams.visible = false;
            this.$refs.AddParamsRef.resetFields();
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    // 控制添加参数按钮的禁用
    isDisabled() {
      return this.cascader.selectedKey.length !== 3;
    },
    titleText() {
      if (this.tabs.activeKey == "many") {
        return "动态参数";
      } else {
        return "静态属性";
      }
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    PlusOutlined,
  },
};
</script>

<style>
</style>