<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :name="name" :arr="arr" @father="jShao"></HelloWorld>
    <p>{{ str }}</p>

    <p>**********自定义指令********</p>
    <span v-zhiling:a="123"></span>
    <p>*********自定义指令*********</p>
  </div>
</template>

<script>
// 导入组件
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      name: "里斯",
      arr: ["王五", "小三"],
      str: "",
    };
  },
  methods: {
    jShao(val) {
      this.str = val;
    },
  },
};
</script>
