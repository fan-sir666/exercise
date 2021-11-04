<template>
  <div>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <!-- 用户名 -->
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 密码 -->
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <!-- 确认密码 -->
      <van-field
        v-model="repeatPassword"
        type="password"
        name="repeatPassword"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请再次输入密码' }]"
      />
      <!-- 手机号 -->
      <van-field
        v-model="mobile"
        name="mobile"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <!-- 验证码 -->
      <van-field
        v-model="smscode"
        name="smscode"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <!-- 短信发送按钮 -->
        <template #button>
          <van-button
            type="primary"
            size="small"
            :disabled="isDisabled"
            @click="sendsmsHandle"
            >{{ sendcodemsg }}</van-button
          >
        </template>
      </van-field>
      <!-- 注册按钮 -->
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >注册用户</van-button
        >
      </div>
    </van-form>
    <!-- 用户须知 -->
    <van-row type="flex" justify="space-around">
      <van-col span="12">
        <van-checkbox v-model="isagree">我同意《会员服务协议》</van-checkbox>
      </van-col>
      <!-- <van-col span="6">
        <NuxtLink to="/my/login">立即登录</NuxtLink>
      </van-col> -->
    </van-row>
  </div>
</template>

<script>
import { username, password, mobile } from "~/utils";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "", // 用户名
      password: "", // 密码
      repeatPassword: "", // 确认密码
      mobile: "", // 手机号
      smscode: "", // 验证码
      smscodeServer: "", // 服务端返回的验证码
      isagree: false, // 勾选协议状态
      isDisabled: false, // 发送短信按钮的状态
      sendcodemsg: "获取验证码" // 发送短信按钮的文本提示
    };
  },
  methods: {
    // 发送短信
    async sendsmsHandle() {
      // 1. 校验手机号
      const msg = mobile(this.mobile);
      if (msg) return Toast(msg);
      // 2. 禁用发送按钮
      this.isDisabled = true;
      // 3. 发送短信
      let time = 30;
      this.timerId = setInterval(() => {
        time--;
        this.sendcodemsg = `倒计时:${time}`
        if(time == 0) {
          this.isDisabled = false;
          this.sendcodemsg = '重新获取'
          // 清除定时器
          clearInterval(this.timerId);
        }
      }, 1000);
      const {data} = await this.$api.Sendsms(this.mobile);
      this.smscodeServer = data; // 记录后台返回的验证码
    },
    // 表单信息
    async onSubmit(values) {
      // 1. 判断用户是否都选协议
      if (!this.isagree) return Toast("请阅读会员协议,同意后才可注册~");
      // 2. 表单校验
      const msg =
        username(this.username) ||
        password(this.password, this.repeatPassword) ||
        mobile(this.mobile);
      if (msg) return Toast(msg);
      // 3. 验证码是否输入正确
      if(this.smscode !== this.smscodeServer) return Toast("短信验证码有误，请重新输入");
      // 4.调用注册接口
      console.log(values);
      const { status , message} = await this.$api.Register(values);
      if(status == 200) {
        Toast(message);
        this.$router.push('/my/login')
      };
    }
  }
};
</script>
