<template>
  <!-- 框架布局 flex  -->
  <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout-content>
      <!-- 登录框 -->
      <a-row>
        <a-col :span="6" :offset="9" class="box">
          <!-- form表单 -->
          <a-form :model="form" :rules="rules" ref="loginForm">
            <!-- 表单头部 -->
            <a-row class="login-title">
              <a-col :span="24">
                <h2>
                  <img src="../assets/image/logo.png" alt="" />后台管理系统
                </h2>
                <span>Ant Design 是西湖区最具影响力的 Web 设计规范</span>
              </a-col>
            </a-row>

            <!-- 登录方式 -->
            <a-row class="login-way">
              <a-col :span="24">
                <!-- tabs标签页  -->
                <a-tabs :tabBarStyle="{ textAlign: 'center' }">
                  <!-- 账号密码登录 -->
                  <a-tab-pane key="1" tab="账号密码登录">
                    <!-- 账号 -->
                    <a-form-item :wrapperCol="{ span: 24 }" name="username">
                      <a-input
                        size="large"
                        type="text"
                        placeholder="请输入用户名"
                        v-model:value="form.username"
                      >
                        <template #prefix
                          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input>
                    </a-form-item>
                    <!-- 密码 -->
                    <a-form-item :wrapperCol="{ span: 24 }" name="password">
                      <a-input-password
                        size="large"
                        type="password"
                        v-model:value="form.password"
                        placeholder="请输入密码"
                      >
                        <template #prefix
                          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input-password>
                    </a-form-item>
                  </a-tab-pane>
                  <!-- 手机号登录 -->
                  <a-tab-pane key="2" tab="手机号登录">
                    <!-- 手机号 -->
                    <a-form-item :wrapperCol="{ span: 24 }">
                      <a-input
                        size="large"
                        type="text"
                        placeholder="请输入手机号"
                      >
                        <template #prefix
                          ><MobileOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input>
                    </a-form-item>
                    <!-- 验证码 -->
                    <a-row :gutter="16">
                      <a-col :span="16">
                        <a-form-item :wrapperCol="{ span: 24 }">
                          <a-input
                            size="large"
                            type="text"
                            placeholder="请输入验证码"
                          >
                            <template #prefix
                              ><MailOutlined style="color: rgba(0, 0, 0, 0.25)"
                            /></template>
                          </a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :span="8">
                        <a-button
                          type="primary"
                          block
                          size="large"
                          style="padding: 0"
                          >获取验证码</a-button
                        >
                      </a-col>
                    </a-row>
                  </a-tab-pane>
                </a-tabs>
              </a-col>
            </a-row>
            <!-- 忘记密码 -->
            <a-row>
              <a-col :span="7">
                <a-checkbox> 自动登录 </a-checkbox>
              </a-col>
              <a-col :span="6" offset="11" :style="{ textAlign: 'right' }">
                <router-link to="">忘记密码?</router-link>
              </a-col>
            </a-row>

            <!-- 确定按钮 -->
            <a-row :style="{ marginTop: '20px' }">
              <a-col :span="24">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-button type="primary" block size="large" @click="jYan"
                    >确定</a-button
                  >
                </a-form-item>
              </a-col>
            </a-row>

            <!-- 其他登录方式 -->
            <a-row>
              <a-col :span="16">
                <span style="margin-right: 5px">其他登录方式</span>
                <AlipayCircleOutlined class="login-icon" />
                <TaobaoCircleOutlined class="login-icon" />
                <WeiboCircleOutlined class="login-icon" />
              </a-col>
              <a-col :span="6" offset="2" :style="{ textAlign: 'right' }">
                <router-link to="">注册账号</router-link>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
// 导入图标
import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  MailOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons-vue";
// 引入接口
import { user } from "@/api";
// 引入http方法
import { httpPost } from "@/utils/http";
// 导入全局提示
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符之间", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在6-18个字符之间", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    jYan() {
      this.$refs.loginForm
        .validate()
        // 校验成功
        .then(() => {
          // console.log("values", this.form);
          // console.log(this);
          // 获取接口路径
          const url = user.UserLogin;
          // 收集参数
          let params = {
            username: this.form.username,
            password: this.form.password,
          };
          // 发送axios请求
          /* this.$axios
            .post("/login", params)
            .then((response) => {
              let res = response.data;
              // console.log(res);
              if (res.meta.status == 200) {
                // 登录成功提示语
                message.success(res.meta.msg);
                // 将后台发来的token 存到 sessionStorage 中
                window.sessionStorage.setItem("token", res.data.token);
                // 跳转到首页 /home
                this.$router.push("/home");
              } else if (res.meta.status == 400) {
                return message.error(res.meta.msg);
              }
            })
            .catch((error) => {
              console.log(error);
            }); */
          // 3.发送请求
          httpPost(url, params)
            .then((res) => {
              // 如果返回200 则登录成功
              if (res.meta.status == 200) {
                message.success(res.meta.msg);
                window.sessionStorage.setItem("token", res.data.token);
                // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
                return this.$router.push("/home");
              }

              // 如果返回400 则弹出登录失败信息
              if (res.meta.status == 400) {
                return message.error(res.meta.msg);
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        // 校验失败
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  components: {
    UserOutlined,
    LockOutlined,
    MobileOutlined,
    MailOutlined,
    AlipayCircleOutlined,
    TaobaoCircleOutlined,
    WeiboCircleOutlined,
  },
};
</script>

<style scoped>
.ant-layout {
  height: 100%;
  background-image: url("../assets/image/bg.svg");
}

.ant-layout-header {
  background-color: transparent;
}
/* 辅助样式 */
/* .box {
  height: 500px;
  background-color: red;
} */

.ant-form {
  width: 366px;
  margin: 0 auto;
  /* border: 1px solid #cccccc; */
}
.login-title {
  text-align: center;
}

.login-title h2 {
  font-size: 34px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
}

.login-title img {
  height: 44px;
}

.login-title span {
  margin-top: 12px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.login-icon {
  margin: 0 5px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.2);
}

.login-icon:hover {
  color: #1890ff;
}
</style>
