<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="item.id" :data-index="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td><a href="" @click.prevent="tZhuan(item.id)">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "张三", age: 10 },
        { id: 2, name: "李四", age: 20 },
        { id: 3, name: "王五", age: 30 },
        { id: 4, name: "赵六", age: 40 }
      ]
    };
  },
  methods:{
      tZhuan(id){
          this.$router.push("/xiangqing/" + id);
      }
  }
};
</script>

<style scoped>
table {
    width: 100%;
    /* 合并单元格 */
    border-collapse: collapse;
    font-size: 20px;
}

td,
th {
  border: 1px solid #eee;
  line-height: 35px;
  font-size: 12px;
}

th {
  background-color: #ddd;
}
td a {
    text-decoration: none;
}
</style>