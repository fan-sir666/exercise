<template>
  <div>
    <h1>来了,老弟！！！{{ name }} {{ arr }} {{ obj }}</h1>
    <button @click="$emit('father', zcf)">点击我给父传值</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // 多个单词  接收使用小驼峰  props的验证
  // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
  props: {
    name: String,
    arr: {
      // 多类型
      type: [Array, String],
      // 必传
      required: true,
    },
    obj: {
      type: Number,
      // 默认
      default: 100,
    },
  },
  data() {
    return {
      zcf: "我是儿子的钱",
    };
  },
};
</script>
