<template>
  <!-- 组件通讯 父子 跨组件 -->
  <!-- <ComponentTx></ComponentTx> -->

  <!-- 获取Dom 对象 -->
  <!-- <GetDomObj></GetDomObj> -->

  <!-- axios 服务端通信 -->
  <!-- <AxiosYy></AxiosYy> -->

  <!-- teleport 组件：将指定组件渲染到应用外部的其他位置 -->
  <!-- to:通过一个id值进行关联 到 index.html根组件外部 -->
  <!-- <tempport to="#model">
    <Modal />
  </tempport> -->

  <!-- Suspense 组件: 
      确保组件中的 setup 函数被写成异步函数的形式,
      代码执行的顺序仍是先执行 setup 后渲染模板
      
      该组件提供了两个插槽v-slot:default && v-slot:fallback
  -->
  <!-- <Suspense>
    <template v-slot:default>
      <SuspenseYy />
    </template>
    <template v-slot:fallback> loading... </template>
  </Suspense> -->

  <!-- transition 组件:过渡动画
      动画入场: .v-enter-from(初始样式) .v-enter-to(目标样式) .v-enter-active(动画的类型)
      动画离场: .v-leave-from(初始样式) .v-leave-to(目标样式) .v-leave-active(动画的类型)
   -->
  <transition>
    <h1 v-if="show">hello world</h1>
  </transition>
  <button @click="show = !show">button</button>
</template>

<script>
import { provide, ref } from "vue";
import ComponentTx from "./components/ComponentTx.vue";
import GetDomObj from "./components/GetDomObj.vue";
import AxiosYy from "./components/AxiosYy.vue";
import Modal from "./components/Modal.vue";
import SuspenseYy from "./components/SuspenseYy.vue";
export default {
  components: { ComponentTx, GetDomObj, AxiosYy, Modal, SuspenseYy },
  setup() {
    const show = ref(true);
    const userInfo = ref({
      usernane: "EDG",
      age: 22,
      jshao: "我夺冠就是牛逼!!!",
    });
    const changeAge = (val) => {
      userInfo.value.age += val;
    };
    // provide数据和方法的提供
    provide("user", { userInfo, changeAge });
    return { show };
  },
};
</script>

<style>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity 2s ease-in;
}
.v-leave-from {
  opacity: 1;
}
.v-enter-to {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 2s ease-out;
}
</style>
