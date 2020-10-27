<template>
  <div class="hello">
    <h3 @click="changeName(name)">我叫{{ uname }},今年{{ age }}岁</h3>
    <button @click="asyncSru(2)">查看收入明细</button>
    <P>{{shouRu}}</P>
    <button @click="addAge">点击我长大了</button>
    <p>{{zAge}}</p>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters} from "vuex";
export default {
  data(){
    return{
      name:'王五'
    }
  },
  methods:{
    // 直接获取vuex的mutations中的同步方法
   ...mapMutations(["changeName","addAge"]),
   // 直接获取vuex的actions中的异步方法
   ...mapActions(["asyncSru"])
  },
  computed: {
    // 直接获取vuex的state中属性
    ...mapState(["uname", "age","shouRu"]),
    // 处理后的数据    相当于计算属性                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    ...mapGetters(["zAge"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
