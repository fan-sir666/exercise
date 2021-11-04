<template>
  <div class="my">
    <h3>会员个人信息</h3>
    <p>
      <span>用户名:</span>
      <span>{{ userInfo.username }}</span>
    </p>
    <p>
      <span>手机号：</span>
      <span>{{ userInfo.mobile }}</span>
    </p>
    <van-button type="danger" @click="logout">退出登录</van-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["updateToken"]),
    logout() {
      // 清除vuex中token
      this.updateToken("");
      // 跳转index
      this.$router.push("/");
    }
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style scoped>
.my {
  padding: 40px 30px 0;
}
</style>
