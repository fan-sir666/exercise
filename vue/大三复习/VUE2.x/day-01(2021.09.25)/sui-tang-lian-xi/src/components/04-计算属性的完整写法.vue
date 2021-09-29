<template>
  <div>
    <span>姓名:</span>
    <br>
    <input type="text" v-model="full">
  </div>
</template>

<script>
export default {
  /* 
    通过计算属性的完整写法 解决给计算属性赋值

    computed:{
        "计算属性名":{
            set(值){},
            get(){return 值}
        }
    }

*/

  computed: {
    full: {
      set(val) {
         console.log(val);
      },
      get() {
        return "无名氏";
      },
    },
  },
};
</script>

<style></style>
