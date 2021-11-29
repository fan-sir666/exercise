<template>
  <!-- 默认插槽 -->
  <!-- <div id="container">
    <h3>案例：折叠面板</h3>
    <Pannel>
      <img src="../assets/mm.gif" alt="" />
      <span>我是内容</span>
    </Pannel>
    <Pannel>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </Pannel>
    <Pannel></Pannel>
  </div> -->

  <!-- 具名插槽 -->
  <!-- <div id="container">
    <h3>案例：折叠面板</h3>
    <Pannel>
      <template v-slot:title>
        <h4>芙蓉楼送辛渐</h4>
      </template>
      <template v-slot:content>
        <img src="../assets/mm.gif" alt="" />
        <span>我是内容</span>
      </template>
    </Pannel>
    <Pannel>
      <template #title>
        <span style="color: red">我是标题</span>
      </template>
      <template #content>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </Pannel>
  </div> -->

  <!-- 作用域插槽 -->
  <div id="container">
    <h3>案例：折叠面板</h3>
    <Pannel>
      <template v-slot="scope">
        <p>{{ scope.row.defaultTwo }}</p>
      </template>
    </Pannel>
  </div>
</template>

<script>
// 默认
// import Pannel from "../components/02/Pannel1.vue";
// 具名
// import Pannel from "../components/02/Pannel2.vue";
// 作用域
import Pannel from "../components/02/Pannel3.vue";
export default {
  components: {
    Pannel,
  },
};
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>
