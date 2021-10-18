<template>
  <div>
    <p>用户名： <input type="text" name="" id="" /></p>
    <p>密码：<input type="password" name="" id="" /></p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    //   登录
    login() {
      setTimeout(() => {
        //   请求成功
        const auth = "dsadadsadas";

        this.$store.commit("updateAuth", auth);
        Cookie.set("auth", auth);
        
        this.$router.push("/");
      }, 1000);
    }
  }
};
</script>
