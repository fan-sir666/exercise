<template>
  <div id="app" class="container">
    <h3>留言板:</h3>
    <div class="form-group" style="max-height: 300px; overflow: auto">
      <!-- 循环项 -->
      <div class="row list-group-item" v-for="item in handleSearch" :key="item.id">
        <div class="col-md-1">{{ item.nickname }}</div>
        <div class="col-md-5">{{ item.content }}</div>
        <div class="col-md-2">{{ item.date.Format("yyyy-MM-dd hh:mm") }}</div>
        <div class="col-md-4">
          <button
            class="btn btn-danger"
            type="button"
            @click="handleDel(item.id)"
          >
            删除
          </button>
          <button
            class="btn btn-info"
            type="button"
            @click="handleEdit(item.id)"
          >
            修改
          </button>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <form class="form-horizontal">
      <div class="form-group">
        <label for="search" class="col-sm-1 control-label">搜索</label>
        <div class="col-sm-11">
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="搜索留言"
            v-model="searchVal"
            @change="handleSearch"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="nikename" class="col-sm-1 control-label">昵称</label>
        <div class="col-sm-11">
          <input
            type="text"
            class="form-control"
            id="nikename"
            placeholder="请输入昵称"
            v-model="ncName"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="content" class="col-sm-1 control-label">内容</label>
        <div class="col-sm-11">
          <textarea
            id="content"
            class="form-control"
            rows="3"
            v-model="srContent"
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success col-sm-1 col-sm-push-9"
        @click="handleAdd"
      >
        发表
      </button>
      <button
        type="button"
        class="btn btn-danger col-sm-1 col-sm-push-10"
        @click="handleclear"
      >
        清屏
      </button>
    </form>
    <!-- 修改 -->
    <form class="form-horizontal" v-show="editModelStatus">
      <input type="hidden" ref="hide" />
      <div class="form-group">
        <label class="col-sm-1 control-label">修改：</label>
        <div class="col-sm-11">
          <textarea
            class="form-control"
            rows="3"
            v-model="editContent"
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success col-sm-1 col-sm-push-11"
        @click="affirmEdit"
      >
        确认修改
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";

export default defineComponent({
  setup() {
    //  基本数据
    type listType = {
      id: number;
      nickname: string;
      content: string;
      date: Date;
    };
    const list: Array<listType> = reactive([
      {
        id: 1,
        nickname: "笑话",
        content: "今天天气真好",
        date: new Date(),
      },
      {
        id: 2,
        nickname: "小草",
        content: "是呀，那咱们出去晒太阳吧",
        date: new Date(),
      },
    ]);
    // 日期格式化
    Date.prototype.Format = function (fmt) {
      //author: meizz
      var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds(), //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (this.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    };

    // 添加
    // 昵称
    const ncName = ref("");
    // 输入内容
    const srContent = ref("");
    const handleAdd = () => {
      // console.log(ncName.value);
      // console.log(srContent.value);
      // 校验
      if (ncName.value.trim().length == 0 || srContent.value.trim().length == 0)
        return alert("昵称和内容不能为空");
      list.push({
        id: list.length + 1,
        nickname: ncName.value,
        content: srContent.value,
        date: new Date(),
      });
      // 清空输入框
      ncName.value = "";
      srContent.value = "";
    };
    // 删除
    const handleDel = (id) => {
      const index = list.findIndex((item) => item.id == id);
      list.splice(index, 1);
    };
    // 清屏
    const handleclear = () => {
      list.splice(0);
    };
    // 修改
    const editModelStatus = ref(false);
    const editId = ref(null);
    const editContent = ref("");
    // 回显
    const handleEdit = (id) => {
      // 修改框出现
      editModelStatus.value = true;
      list.some((item) => {
        if (item.id == id) {
          editId.value = id;
          editContent.value = item.content;
        }
      });
    };
    // 确认修改
    const affirmEdit = () => {
      list.forEach((item) => {
        if (item.id == editId.value) {
          item.content = editContent.value;
          editModelStatus.value = false;
        }
      });
    };
    // 搜索
    const searchVal = ref("");
    const handleSearch = computed(()=>{
      // 一定要记住  计算属性是需要 返回值的   return 
      
      return list.filter(item =>{
        if(item.nickname.includes(searchVal.value) || item.content.includes(searchVal.value)) {
          return true;
        }
      })
    })
    
    return {
      list,
      handleAdd,
      ncName,
      srContent,
      handleDel,
      handleclear,
      editModelStatus,
      handleEdit,
      editContent,
      affirmEdit,
      handleSearch,
      searchVal,
    };
  },
});
</script>


<style scoped src="../assets/cs.css">
.btn {
  padding: 0 10px;
}
</style>