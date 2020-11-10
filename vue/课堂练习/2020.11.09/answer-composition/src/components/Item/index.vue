<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ itemHao }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemissue.length > 0">
          <!-- 题干 -->
          <header class="item_title">{{ itemTg }}</header>
          <!-- 选项 -->
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in itemissue[itemHao - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="addYs(index, item.topic_answer_id)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: dtSy == index }"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 下一题按钮 -->
      <span
        class="next_item button_style"
        v-if="itemHao < itemissue.length"
        @click="itemNext"
      ></span>
      <!-- 提交按钮 -->
      <span class="submit_item button_style" @click="itemSub" v-else></span>
    </section>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
export default {
  // data() {
  //   return {
  //     dtSy: null,
  //     dtId: null
  //   };
  // },
  setup() {
    // vuex对象
    let store = useStore();
    // 路由对象
    let router = useRouter();

    // 调用getData方法
    store.dispatch("getData");

    //#region 获取itemHao属性
    let itemHao = computed(() => {
      return store.state.itemHao;
    });
    //#endregion

    //#region 获取itemissue属性
    let itemissue = computed(() => {
      return store.state.itemissue;
    });
    // console.log(itemissue);
    let itemTg = computed(() => {
      return itemissue.value[itemHao.value - 1].topic_name;
    });
    //#endregion

    //#region
    let dtSy = ref(null);
    let dtId = ref(null);
    // 添加答题样式
    function addYs(index, id) {
      dtSy.value = index;
      dtId.value = id;
    }
    // 下一题
    function itemNext() {
      if (dtSy.value != null) {
        dtSy.value = null;
        store.dispatch("addTijiao", dtId.value);
      } else {
        alert("请作答习题!!!");
      }
    }
    // 提交
    function itemSub() {
      if (dtSy.value != null) {
        dtSy.value = null;
        store.dispatch("addTijiao", dtId.value);
        router.push("/score");
      } else {
        alert("请作答习题!!!");
      }
    }
    //#endregion

    return {
      itemHao,
      itemissue,
      itemTg,
      addYs,
      itemNext,
      itemSub,
      dtSy
    };
  }
  // computed: {
  //   // ...mapState(["itemHao", "itemissue"]),
  //   // 题干属性
  //   // itemTg() {
  //   //   return this.itemissue[this.itemHao - 1].topic_name;
  //   // }
  // },
  // created() {
  //   // 获取数据
  //   this.$store.dispatch("getData");
  // },
  // methods: {
  // 添加答题样式
  // addYs(index, id) {
  //   this.dtSy = index;
  //   this.dtId = id;
  // },
  // 下一题
  // itemNext() {
  //   if (this.dtSy != null) {
  //     this.dtSy = null;
  //     this.$store.dispatch("addTijiao", this.dtId);
  //   } else {
  //     alert("请作答习题!!!");
  //   }
  // },
  // 提交
  // itemSub() {
  //   if (this.dtSy != null) {
  //     this.dtSy = null;
  //     this.$store.dispatch("addTijiao", this.dtId);
  //     this.$router.push("/score");
  //   } else {
  //     alert("请作答习题!!!");
  //   }
  // }
  // }
};
</script>

<style lang="scss">
.home_container {
  height: 100%;
  background-image: url("/images/1-1.jpg");
}
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
