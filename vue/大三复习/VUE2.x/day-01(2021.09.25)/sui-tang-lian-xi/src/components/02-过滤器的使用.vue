<template>
  <div>
    <p>插值表达式渲染：{{ msg }}</p>
    <!-- 使用过滤器 
        语法:{{需要过滤的值|过滤器名字}}
    -->
    <!-- 全局 -->
    <p>反转msg:{{msg|reverse}}</p>
    <!-- 局部 -->
    <p :title="msg | toUp">鼠标长停</p>

    <!-- 多个过滤器的使用+传值 -->
     <p :title="msg | toUp | reverse('|')">鼠标长停</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue",
    };
  },
  /* 
        局部过滤器: 语法
        filters:{
            过滤器名称(){
                returen 处理后的值
            }
        }
  */
  filters: {
    toUp(val) {
      return val.toUpperCase();
    },
  },
};
</script>

<style></style>
