<template>
  <div>
    <MyTable :list="lbList">
      <template v-slot:header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <!-- v-slot:body v-slot="item" -->
      <template #body="item">
        <td>{{ item.row.id }}</td>
        <td>{{ item.row.goods_name }}</td>
        <td>{{ item.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px;"
            type="text"
            v-focus
            @blur="item.row.inputVisible = false"
            v-if="item.row.inputVisible"
            v-model="item.row.inputValue"
            @keydown.enter="addTag(item.row)"
            @keydown.esc="item.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block;"
            class="btn btn-primary btn-sm add-tag"
            @click="item.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(str, ind) in item.row.tags"
            :key="ind"
            class="badge bg-warning text-dark"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="handleDel(item.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";

export default {
  components: {
    MyTable,
  },
  data() {
    return {
      lbList: JSON.parse(localStorage.getItem("tableData")) || [],
    };
  },
  created() {
    // 请求列表数据
    this.$axios.get("/api/goods").then((res) => {
      this.lbList = res.data.data;
    });
  },
  methods: {
    handleDel(id) {
      this.lbList = this.lbList.filter((item) => item.id != id);
    },
    //#region 添加标签
    addTag(obj){
      if(obj.inputValue.trim().length === 0) return alert('请输入数据！！！')
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    }
    //#endregion
  },
  watch: {
    lbList: {
      handler() {
        localStorage.setItem("tableData", JSON.stringify(this.lbList));
      },
      deep: true,
    },
  },
  // 自定义自动获取焦点指令
  directives:{
    focus:{
      inserted(el){
        el.focus()
      }
    }
  }
};
</script>

<style></style>
