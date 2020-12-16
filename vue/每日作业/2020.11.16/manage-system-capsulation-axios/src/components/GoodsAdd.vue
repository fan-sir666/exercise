<template>
  <a-layout style="width: 100%; height: 100%">
    <!-- 面包屑导航 -->
    <a-breadcrumb separator=">" style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: 900; font-size: 18px; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>添加商品</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <!-- 提示 -->
      <a-alert
        message="添加商品信息"
        type="error"
        showIcon
        style="text-align: center"
      >
        <template #icon> <ExclamationCircleOutlined /></template>
      </a-alert>
      <!-- 步骤条 -->
      <a-row>
        <a-col :span="20" :offset="2">
          <a-steps
            :current="Number(activeKey)"
            style="margin-top: 24px"
            size="small"
            labelPlacement="vertical"
          >
            <a-step title="基本信息" />
            <a-step title="商品参数" />
            <a-step title="商品属性" />
            <a-step title="商品图片" />
            <a-step title="商品内容" />
            <a-step title="完成" />
          </a-steps>
        </a-col>
      </a-row>
      <!-- tab栏切换 -->
      <a-form
        layout="vertical"
        :model="addForm"
        :rules="addFormRules"
        ref="ruleForm"
      >
        <a-tabs
          tabPosition="left"
          style="margin-top: 24px"
          :activeKey="activeKey"
          @change="tabStopToggle"
          @tabClick="tabToggle"
        >
          <a-tab-pane key="0" tab="基本信息">
            <a-form-item label="商品名称" name="goods_name" required>
              <a-input v-model:value="addForm.goods_name" />
            </a-form-item>
            <a-form-item label="商品价格" name="goods_price" required>
              <a-input v-model:value="addForm.goods_price" />
            </a-form-item>
            <a-form-item label="商品重量" name="goods_weight" required>
              <a-input v-model:value="addForm.goods_weight" />
            </a-form-item>
            <a-form-item label="商品数量" name="goods_number" required>
              <a-input v-model:value="addForm.goods_number" />
            </a-form-item>
            <a-form-item label="商品分类" name="goods_cat" required>
              <a-cascader
                v-model:value="addForm.goods_cat"
                :options="options"
                :fieldNames="{
                  label: 'cat_name',
                  value: 'cat_id',
                  children: 'children',
                }"
                placeholder="请选择"
                @change="getSpflParam"
              />
            </a-form-item>
          </a-tab-pane>
          <a-tab-pane key="1" tab="商品参数">
            <a-form-item
              v-for="item in manyData"
              :key="item.attr_id"
              :label="item.attr_name"
            >
              <a-checkbox-group
                v-model:value="item.attr_vals"
                :options="item.attr_vals"
              />
            </a-form-item>
          </a-tab-pane>
          <a-tab-pane key="2" tab="商品属性">
            <a-form-item
              v-for="item in onlyData"
              :key="item.attr_id"
              :label="item.attr_name"
            >
              <a-input v-model:value="item.attr_vals" />
            </a-form-item>
          </a-tab-pane>
          <a-tab-pane key="3" tab="商品图片">
            <!-- 上传组件 -->
            <!-- accept接受上传的文件类型
                 action上传的地址
                 listType 上传图片展示的形式
                 multiple 同时上传多个
             -->
            <a-upload
              accept="image/*"
              action="http://www.wanlum.com:8888/api/private/v1/upload"
              :headers="headersObj"
              listType="picture"
              @change="uploadChange"
              @preview="ViewImage"
              :remove="delImage"
            >
              <a-button type="primary"> <upload-outlined /> 点击上传 </a-button>
            </a-upload>
          </a-tab-pane>
          <a-tab-pane key="4" tab="商品内容">
            <!-- editor 使用哪个富文本编辑器 -->
            <ckeditor
              :editor="editor"
              v-model="addForm.goods_introduce"
            ></ckeditor>
            <!-- 添加商品按钮 -->
            <a-button type="primary" @click="addCommodity">添加商品</a-button>
          </a-tab-pane>
        </a-tabs>
      </a-form>
    </a-card>
    <!-- 图片预览弹出框 -->
    <a-modal title="图片预览" :closable="false" :visible="previewVisible">
      <template #footer>
        <a-button type="primary" @click="handleCancel"> 关闭预览 </a-button>
      </template>
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </a-layout>
</template>

<script>
import {
  ExclamationCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
// 导入请求地址
import { goods } from "@/api";
// 引入请求方法 httpGet
import { httpGet, httpPost } from "@/utils/http";
import { message } from "ant-design-vue";
// 富文本编辑器
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import _ from "lodash";
export default {
  components: {
    ExclamationCircleOutlined,
    UploadOutlined,
  },
  data() {
    return {
      // 表单
      addForm: {
        goods_name: "",
        goods_price: "",
        goods_weight: "",
        goods_number: "",
        goods_cat: [],
        goods_introduce: "",
        pics: [],
        attrs: [],
      },
      // 校验规则
      addFormRules: {
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
        ],
        goods_price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
        ],
        goods_weight: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
        ],
        goods_number: [
          { required: true, message: "请输入商品数量", trigger: "blur" },
        ],
        goods_cat: [
          {
            type: "array",
            required: true,
            message: "商品分类不能为空",
            trigger: "blur",
          },
        ],
      },
      // 级联数据源
      options: [],
      // 级联第三级id
      cat_id: "",
      activeKey: "0",
      // 动态参数
      manyData: [],
      // 静态属性
      onlyData: [],
      // 长传图片的token
      headersObj: {
        Authorization: window.sessionStorage.getItem("token"),
      },
      // 图片预览弹框显示隐藏
      previewVisible: false,
      // 图片路径
      previewImage: "",
      // 富文本编辑器
      editor: ClassicEditor,
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
            this.options = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // tab切换 阻止未选择商品分类就跳转
    tabStopToggle(activeKey) {
      //   console.log(activeKey);
      if (activeKey != "0" && this.addForm.goods_cat.length != 3) {
        message.error("请选择商品分类");
        this.activeKey = "0";
      } else {
        this.activeKey = activeKey;
      }
    },
    // 获取商品分类参数
    getSpflParam(value) {
      //   console.log(value);
      if (value.length == 3) {
        this.cat_id = value[value.length - 1];
      }
    },
    // 下一个
    tabToggle(activeKey) {
      //   console.log(this.cat_id);
      // 获取动态参数
      if (activeKey == "1") {
        httpGet(`categories/${this.cat_id}/attributes`, { sel: "many" })
          .then((response) => {
            // console.log(response);
            let { meta, data } = response;
            if (meta.status == 200) {
              // 处理成渲染的数据
              data.forEach((ele) => {
                ele.attr_vals =
                  ele.attr_vals.length == 0 ? [] : ele.attr_vals.split(" ");
              });
              this.manyData = data;
              // console.log(this.manyData);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // 获取静态属性
      if (activeKey == "2") {
        httpGet(`categories/${this.cat_id}/attributes`, { sel: "only" })
          .then((response) => {
            // console.log(response);
            let { meta, data } = response;
            if (meta.status == 200) {
              this.onlyData = data;
              // console.log(this.manyData);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // 上传图片
    uploadChange(file) {
      // console.log(file);
      // done 表示上传完成
      if (file.file.status == "done") {
        let { fileList } = file;
        let arr = [];
        // 遍历出传给后台的地址并处理成上传要求的数组对象形式
        fileList.forEach((item) => {
          arr.push({ pic: item.response.data.tmp_path });
        });
        this.addForm.pics = arr;
        // console.log(this.addForm.pics);
      }
    },
    // 预览图片
    ViewImage(file) {
      // console.log(file);
      this.previewImage = file.response.data.url.replace(
        /127.0.0.1/,
        "www.wanlum.com"
      );
      this.previewVisible = true;
    },
    // 取消图片预览
    handleCancel() {
      this.previewVisible = false;
    },
    // 移除上传
    delImage(file) {
      let index = this.addForm.pics.findIndex(
        (item) => item.pic == file.response.data.tmp_path
      );
      this.addForm.pics.splice(index, 1);
      // console.log(this.addForm.pics);
    },
    // 添加商品
    addCommodity() {
      // console.log(111111);
      this.$refs.ruleForm
        .validate()
        .then(() => {
          // lodash工具库深拷贝
          let subForm = _.cloneDeep(this.addForm);
          // 收集并处理数据
          // 1.分类数据
          subForm.goods_cat = subForm.goods_cat.join(",");
          // 2.动态参数
          this.manyData.forEach((item) => {
            subForm.attrs.push({
              attr_id: item.attr_id,
              attr_value: item.attr_vals.join(" "),
            });
          });
          // 3.静态参数
          this.onlyData.forEach((item) => {
            subForm.attrs.push({
              attr_id: item.attr_id,
              attr_value: item.attr_vals,
            });
          });
          // console.log(subForm);
          // 发请求
          httpPost(goods.AddGoods, subForm)
            .then((response) => {
              // console.log(response);
              let {meta} = response;
              if(meta.status == 201){
                message.success(meta.msg);
                this.$router.push("/goods");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          message.error("您还有未填写的项");
          console.log("error", error);
        });
    },
  },
};
</script>

<style>
.ant-alert-icon {
  top: 50%;
  left: 50%;
  transform: translate(-400%, -50%);
}
.ck-editor__editable {
  min-height: 400px;
}
</style>