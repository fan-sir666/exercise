<template>
  <div id="app" class="main">
    <h2>小目标列表</h2>
    <div class="list">
      <h3>添加小目标</h3>
      <input
        type="text"
        class="text-keyword"
        placeholder="输入小目标后，按回车确认"
        v-model="srkVal"
        @keyup.enter="handleAdd"
      />
      <p>共有{{list.length}}个目标，已完成{{list.length - untarget}}，还有{{untarget}}条未完成</p>
    </div>
    <ul>
      <li class="li1" v-for="item in list" :key="item.id">
        <div>
          <span :class="['type-span',item.status?'active':'']" @click="handleTabStatus(item.id)"></span>
          <span>{{ item.name }}</span>
          <span class="close" @click="handleDel(item.id)">X</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";

export default defineComponent({
  setup() {
    // 初始数据
    type listType = {
      id: number;
      name: string;
      status: boolean;
    };
    const list: Array<listType> = reactive([
      { id: 1, name: "html", status: true },
      { id: 2, name: "css3", status: false },
    ]);

    // 输入框的值
    const srkVal = ref("");
    // 添加
    const handleAdd = () => {
      // 非空校验
      if (srkVal.value.trim().length == 0) return alert("输入内容不能为空！！");
      list.push({
        id: list.length + 1,
        name: srkVal.value,
        status: false,
      });
      srkVal.value = "";
    };
    // 计算各种数量
    const untarget = computed(() => {
      const cs = list.filter((item) => item.status == false);
      return cs.length;
    });
    const handleTabStatus = (id)=>{
        list.forEach(item =>{
            if(item.id == id) {
                item.status = !item.status;
            }
        })
    }

    // 删除
    const handleDel = (id)=>{
        const index = list.findIndex(item=>item.id == id);
        list.splice(index,1);
    }

    return {
      list,
      srkVal,
      handleAdd,
      untarget,
      handleTabStatus,
      handleDel
    };
  },
});
</script>



<style scoped>
body {
  font-family: "微软雅黑";
  font-size: 14px;
}
input {
  font-size: 14px;
}
body,
ul,
div,
html {
  padding: 0;
  margin: 0;
}
.hidden {
  display: none;
}
.main {
  width: 800px;
  margin: 0 auto;
}
li {
  list-style-type: none;
  line-height: 40px;
  position: relative;
  border: 1px solid transparent;
  padding: 0 20px;
}
li .type-span {
  display: block;
  width: 10px;
  height: 10px;
  background: #ccc;
  margin: 14px 10px 0 0;
  float: left;
}
li .type-span.active {
  background-color: red;
}
li .close {
  position: absolute;
  color: #f00;
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  right: 20px;
  cursor: pointer;
  display: none;
  top: 0;
}
li:hover {
  border: 1px solid #09f;
}
li:hover .close {
  display: block;
}
li .text-keyword {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}
.text-keyword {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  outline: none;
}
</style>