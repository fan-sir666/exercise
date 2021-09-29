<template>
  <div>
    <input type="number" v-model="num" />
    <br>
    <input type="text" v-model="user.name">
    <input type="text" v-model="user.age">
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      user: {
        name: "",
        age: "",
      },
    };
  },
  /* 
  侦听器:

  watch:{

      监听数据名称(newVal,oldVal){}

      深度监听语法:
      监听数据名称：{
          handler(newVal,oldVal){}
          deep:true,
          immediate:true   // 立即侦听(网页打开handler执行一次)
      }
  }
  */
  watch: {
    num(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    user:{
        handler(newVal,oldVal){
            console.log(newVal,oldVal);
        },
        deep:true,
        immediate:true
    }
  },
};
</script>

<style></style>
