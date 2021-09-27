<template>
  <div id="app">
    <FtoSon :toName="name"></FtoSon>
    <StoFather :list="list" @ztof="handleAlter"></StoFather>
  </div>
</template>

<script>
// 父传子 属性 props接收
import FtoSon from "./components/FtoSon.vue";
// 子传父 $emit @自定义事件
import StoFather from "./components/StoFather.vue";

// 跨组件传值
import eventBus from "./EventBus/index"
export default {
  data() {
    return {
      name: "学生信息介绍",
      list: [
        { id: 1, name: "张三", age: 20 },
        { id: 2, name: "半瓢水", age: 35 },
      ],
    };
  },
  created(){
    eventBus.$on("send",(msg)=>{
      console.log(msg);
    })
  },
  methods:{
    handleAlter(obj){
      alert(`大家好我叫${obj.name},今年${obj.age}岁了`)
    }
  },
  components: {
    FtoSon,
    StoFather,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
