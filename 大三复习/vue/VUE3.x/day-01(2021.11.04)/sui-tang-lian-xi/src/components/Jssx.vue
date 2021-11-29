<template>
  <div>
    <input type="text" v-model="keywords" placeholder="请输入关键字" />
    <ul>
      <li v-for="(item,i) in searchList" :key="i">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  setup() {
    // 关键字
    const keywords = ref("");
    // 数据
    const list = reactive([
      "林俊杰",
      "孙燕姿",
      "周杰伦",
      "张惠妹",
      "刘若英",
      "林宥嘉",
      "刘德华",
      "张韶涵",
      "周笔畅",
      "孙楠",
    ]);

    // 计算属性的使用
    const searchList = computed(()=>{
        return list.filter(item=>item.includes(keywords.value))
    })
    return {keywords,list,searchList}
  },
};
</script>

<style></style>
