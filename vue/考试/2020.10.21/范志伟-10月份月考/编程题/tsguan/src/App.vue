<template>
  <div id="app">
    <div class="grid">
      <div>
        <h1>图书管理</h1>
        <div class="book">
          <div>
            <label for="id">
              编号：
            </label>
            <input type="text" id="id" v-model="id" :disabled="flag" />
            <label for="name">
              名称：
            </label>
            <input type="text" id="name" v-model="name" />
            <button @click.prevent="addBook" :disabled="submitflag">
              提交
            </button>
          </div>
        </div>
      </div>
      <div>
        <span>共有{{ totalBook }}本书</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in books" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.date }}</td>
            <td>
              <a href="" @click.prevent="editBook(item.id)">修改</a>
              <span>|</span>
              <a href="" @click.prevent="delBook(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
      submitflag: false,
      id: "",
      name: "",
      books: ""
    };
  },
  created() {
    this.showBook();
  },
  methods: {
    // 渲染页面
    async showBook() {
      let res = await this.$axios.get("books");
      // console.log(res);
      this.books = res.data;
    },
    // 添加
    async addBook() {
      if (this.flag) {
        let res = await this.$axios.put(`books/${this.id}`, {
          name: this.name
        });
        // console.log(res);
        if (res.data.status == 200) {
          this.showBook();
        }
      } else {
        let res = await this.$axios.post("books", {
          name: this.name
        });
        // console.log(res);
        if (res.data.status == 200) {
          this.showBook();
        }
      }
      // 清空输入框
      this.id = this.name = "";
      this.flag = false;
    },
    // 删除
    async delBook(id) {
      let res = await this.$axios.delete(`books/${id}`);
      // console.log(res);
      if (res.data.status == 200) {
        this.showBook();
      }
    },
    // 修改
    async editBook(id) {
      this.flag = true;
      let res = await this.$axios.get(`books/${id}`);
      // console.log(res);
      //回显数据
      if (res.status == 200) {
        this.id = res.data.id;
        this.name = res.data.name;
      }
    }
  },
  computed: {
    totalBook() {
      return this.books.length;
    }
  },
  watch: {
    async name() {
      let res = await this.$axios.get(`books/book/${this.name}`);
      // console.log(res);
      if (res.data.status == 1) {
        this.submitflag = true;
      } else {
        this.submitflag = false;
      }
    }
  }
};
</script>

<style>
.grid {
  margin: auto;
  width: 530px;
  text-align: center;
}

.grid table {
  border-top: 1px solid #c2d89a;
  width: 100%;
  border-collapse: collapse;
}

.grid th,
td {
  padding: 10;
  border: 1px dashed orange;
  height: 35px;
  line-height: 35px;
}

.grid th {
  background-color: orange;
}

.grid .book {
  padding-bottom: 10px;
  padding-top: 5px;
  background-color: orange;
}
</style>